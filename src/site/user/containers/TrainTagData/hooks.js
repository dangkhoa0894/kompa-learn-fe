import React, { useEffect, useState, useCallback } from "react";
import { GET_DATA_TRAIN_BY_INDEX } from "SRC/graphql/Model/Query";
import { ERROR_CODE } from "SRC/resource/string";
import {
  UPDATE_LABEL_FOR_CONTENT,
  SUBMIT_FILE_RAW,
  UPDATE_SENTIMENT_FOR_CONTENT,
  DUPLICATE_CONTENT_MODEL,
} from "SRC/graphql/Model/Mutations";
import { useMutation, useLazyQuery, useSubscription } from "@apollo/client";
import { notification } from "antd";
import { SUBSCRIPTIONS_UPLOAD_MODEL } from "SRC/graphql/Model/Subscriptions";

export const useGetDataByPage = ({ modelId }) => {
  const [data, setData] = useState({});
  const [runQuery, { loading, data: contentData }] = useLazyQuery(
    GET_DATA_TRAIN_BY_INDEX,
    {}
  );

  useEffect(() => {
    if (contentData && contentData?.getDataByIndex) {
      setData({
        data: contentData?.getDataByIndex.content,
      });
    }
  }, [contentData]);

  const getMore = (e) => {
    runQuery({
      variables: {
        dataInput: {
          modelId: parseInt(modelId, 10),
          index: e.page,
        },
      },
    });
  };

  return [useCallback((e) => getMore(e)), { loading, data }];
};

export const useUpdateLabel = () => {
  const [doUpDate] = useMutation(UPDATE_LABEL_FOR_CONTENT);

  const doUpdateLabel = async (data) => {
    doUpDate({
      variables: {
        dataInput: {
          contentId: data.contentId,
          labelId: data.label.id,
        },
      },
      update: (cache, { data: { updateLabelContent } }) => {
        if (updateLabelContent.statusCode === ERROR_CODE.SUCCESS) {
          try {
            cache.modify({
              fields: {
                getDataByIndex({ content = [] }) {
                  const newData = [...content];
                  //   console.log('');
                  newData[data.indexMultiple] = {
                    ...newData[data.indexMultiple],
                    label: {
                      ...data.label,
                    },
                  };
                  return newData;
                },
              },
            });
          } catch (e) {
            notification.error({
              message: "Message error ",
              description: e.message,
            });
          }
        }
      },
    });
  };

  return [useCallback((e) => doUpdateLabel(e))];
};

export const useUpdateSentiment = () => {
  const [doUpdate] = useMutation(UPDATE_SENTIMENT_FOR_CONTENT);

  const doUpdateSentiment = async (data) => {
    doUpdate({
      variables: {
        dataInput: {
          contentId: data.contentId,
          sentimentId: data.sentiment.id,
        },
      },
      update: (cache, { data: { updateSentimentContent } }) => {
        if (updateSentimentContent.statusCode === ERROR_CODE.SUCCESS) {
          try {
            cache.modify({
              fields: {
                getDataByIndex({ content = [] }) {
                  const newData = [...content];
                  //   console.log('');
                  newData[data.indexMultiple] = {
                    ...newData[data.indexMultiple],
                    sentiment: {
                      ...data.sentiment,
                    },
                  };
                  return newData;
                },
              },
            });
          } catch (e) {
            notification.error({
              message: "Message error ",
              description: e.message,
            });
          }
        }
      },
    });
  };

  return [useCallback((e) => doUpdateSentiment(e))];
};

// SUBMIT_FILE

export const useSubmitFile = () => {
  const [doUploadData, { loading }] = useMutation(SUBMIT_FILE_RAW);
  const doUploadFile = async ({ model }) => {
    const c = doUploadData({
      variables: {
        dataInput: {
          modelId: model.id,
        },
      },
    });
    return c;
  };

  return [useCallback((e) => doUploadFile(e)), { isLoading: loading }];
};

// UPDATE_SENTIMENT_FOR_CONTENT

export const useDuplicateContent = () => {
  const [doDuplicate] = useMutation(DUPLICATE_CONTENT_MODEL);

  const doDuplicateContent = async (e) => {
    await doDuplicate({
      variables: {
        dataInput: {
          contentId: e.contentId,
          modelId: e.modelId,
        },
      },
      update: (cache, { data: { duplicateContent } }) => {
        if (duplicateContent.statusCode === ERROR_CODE.SUCCESS) {
          try {
            cache.modify({
              fields: {
                getDataByIndex() {
                  return {
                    content: duplicateContent.data,
                    totalRows: e.totalRows,
                  };
                },
              },
            });
          } catch (err) {
            notification.error({
              message: "Message error ",
              description: err.message,
            });
          }
        }
      },
    });
    // doDuplicate
  };
  return [useCallback((e) => doDuplicateContent(e))];
};

export const useValidateValue = () => {
  const doValidate = ({ infoModel, listTag, listSentiment }) => {
    const isCheckLabel = listTag.some(({ isChooseTag }) => isChooseTag);
    const isCheckSentiment = listSentiment.some(
      ({ isChooseSentiment }) => isChooseSentiment
    );
    if (infoModel.typeModel === 3 && (!isCheckLabel || !isCheckSentiment)) {
      return false;
    }
    return true;
  };
  return useCallback((e) => doValidate(e));
};

export const useNotifyUpload = (infoUser, modelId) => {
  const [isSuccess, setIsSuccess] = useState(0);

  const { data: uploadModel } = useSubscription(
    SUBSCRIPTIONS_UPLOAD_MODEL,
    infoUser && infoUser.id
      ? { variables: { userId: parseInt(infoUser.id, 10) } }
      : {
          skip: true,
        }
  );

  useEffect(() => {
    if (uploadModel?.notifyUpload?.statusCode === ERROR_CODE.SUCCESS) {
      if (uploadModel.notifyUpload.data.model_id === modelId) {
        setIsSuccess(1);
      }
    }
  }, [uploadModel]);

  return isSuccess;
};
