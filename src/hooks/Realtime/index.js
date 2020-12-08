import { gql, useSubscription } from "@apollo/client";
import {
  SUBSCRIPTIONS_STATUS_MODEL,
  SUBSCRIPTIONS_UPLOAD_MODEL,
} from "SRC/graphql/Model/Subscriptions";
import { useState } from "react";
import { ERROR_CODE, _TYPENAME } from "SRC/resource/string";

export const useUpdateModel = ({ userId }) => {
  const [modelTrain, setModelTrain] = useState({});
  useSubscription(SUBSCRIPTIONS_STATUS_MODEL, {
    variables: { userId },
    skip: !userId,
    onSubscriptionData: (res) => {
      if (
        res?.subscriptionData?.data?.notifyTrain?.statusCode ===
        ERROR_CODE.SUCCESS
      ) {
        const receiveData = res.subscriptionData.data?.notifyTrain?.data;
        const { cache } = res.client;
        cache.modify({
          id: `${_TYPENAME.RES_MODEL}:${receiveData.model_id}`,
          fields: {
            score(existingScore = []) {
              const newScore = {
                accuracy: receiveData.accuracy_score,
                f1Score: receiveData.f1_score,
                loss: receiveData.loss,
                precision: receiveData.precision_score,
                recall: receiveData.recall_score,
                validation: receiveData.validation_acc,
                id: new Date().getTime(),
                __typename: _TYPENAME.RES_SCORE,
              };
              const newScoreRef = cache.writeFragment({
                data: newScore,
                fragment: gql`
                  fragment NewScore on ${_TYPENAME.RES_SCORE} {
                    accuracy
                    f1Score
                    loss
                    precision
                    recall
                    validation
                    id
                  }
                `,
              });
              return [newScoreRef, ...existingScore];
            },
            process() {
              return 7;
            },
          },
        });

        setModelTrain({ id: parseInt(receiveData.model_id, 10) });
      }
    },
  });

  return [{ modelTrain }];
};

export const useUploadModelSubscriptions = ({ userId }) => {
  useSubscription(SUBSCRIPTIONS_UPLOAD_MODEL, {
    variables: { userId },
    skip: !userId,
    onSubscriptionData: (res) => {
      if (
        res?.subscriptionData?.data?.notifyUpload?.statusCode ===
        ERROR_CODE.SUCCESS
      ) {
        const receiveData = res.subscriptionData.data?.notifyUpload?.data;
        const { cache } = res.client;
        cache.modify({
          id: `${_TYPENAME.RES_MODEL}:${receiveData.model_id}`,
          fields: {
            process() {
              return 5;
            },
          },
        });
      }
    },
  });
};
// getAllModels({ data = [] }) {
//     const temp = [...data];
//     const modelChange = temp.find(
//       (item) => item.id === parseInt(tempResModel.model_id, 10),
//     );
//     if (modelChange) {
//       setModelTrain(modelChange);
//       const newData = {
//         ...modelChange,
//         process: 7,
//         score: [
//           {
//             accuracy: tempResModel.accuracy_score,
//             f1Score: tempResModel.f1_score,
//             loss: tempResModel.loss,
//             precision: tempResModel.precision_score,
//             recall: tempResModel.recall_score,
//             validation: tempResModel.validation_acc,
//           },
//           ...modelChange.score,
//         ],
//       };
//       modelChange.process = 7;
//       console.log('check alkfjaklfj', [...temp]);
//       return [...temp];
//     }
//     return data;
//   },
// },
// useEffect(() => {
//   if (uploadModel?.notifyUpload && uploadModel.notifyUpload.statusCode === ERROR_CODE.SUCCESS) {
//     updateCacheModel(uploadModel.notifyUpload.data.model_id, 5);
//   }
// }, [uploadModel]);
