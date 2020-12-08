import PropTypes from "prop-types";
import React, { useState, memo } from "react";
import { Button, notification, Typography } from "antd";
import PredictPopup from "SRC/components/PredictPopup";
import ModalView from "SRC/components/common/Modal";
import { useMutation } from "@apollo/client";
import { MODIFY_CONTENT_MODEL } from "SRC/graphql/Model/Mutations";
import { useHistory, useParams } from "react-router-dom";
import { ERROR_CODE } from "SRC/resource/string";
import { useGetDataModifyCache } from "SRC/hooks/Model";
import { TryPredictContainer, ContentTrainCss } from "./styled";

const TryPredict = () => {
  const [isOpenPredict, setIsOpenPredict] = useState(false);

  const togglePredict = () => {
    setIsOpenPredict(!isOpenPredict);
  };

  return (
    <TryPredictContainer>
      <Button color="default" className="btn-try" onClick={togglePredict}>
        Try
      </Button>
      <ModalView
        isOpen={isOpenPredict}
        content={<PredictPopup togglePredict={togglePredict} />}
        onCancel={togglePredict}
        destroyOnClose
        showFooter={false}
        width="fit-content"
        centered
        maskClosable
      />
      <ButtonTrain />
    </TryPredictContainer>
  );
};

export default memo(TryPredict);

const ButtonTrain = () => {
  const { modelId } = useParams();
  const { data: dataCache } = useGetDataModifyCache();
  const history = useHistory();
  const [isOpenPreTrain, setIsOpenPreTrain] = useState(false);
  const [doModifyModel, { loading }] = useMutation(MODIFY_CONTENT_MODEL);

  const togglePreTrain = () => {
    setIsOpenPreTrain((x) => !x);
  };

  const handleSubmit = async () => {
    try {
      history.push("/main/dashboard");
      const res = await doModifyModel({
        variables: {
          dataInput: {
            modelId: parseInt(modelId, 10),
            content: JSON.stringify(dataCache.data),
          },
        },
      });
      if (res?.data?.modifyModel?.statusCode === ERROR_CODE.SUCCESS) {
        notification.warning({
          message: "Message ",
          description: "Waiting for upload new Data ",
        });
      } else {
        throw new Error(
          "Have a problem in update tag content, please try again."
        );
      }
    } catch (e) {
      notification.error({
        message: "Message error ",
        description: e.message,
      });
    }
  };
  const sum =
    Object.values(dataCache?.data || {}).filter((e) => e?.length > 0).length ||
    0;
  return (
    <>
      <Button
        color="default"
        disabled={sum === 0}
        className="btn-train"
        onClick={togglePreTrain}
      >
        Train
        <span className="sum-modify-model">{sum}</span>
      </Button>
      <ModalView
        isOpen={isOpenPreTrain}
        content={<ContentTrainAgain sum={sum} />}
        onCancel={togglePreTrain}
        destroyOnClose
        onOk={handleSubmit}
        okText={loading ? "Uploading..." : "TRAIN "}
        cancelText="CANCEL"
        width="fit-content"
        centered
        maskClosable
      />
    </>
  );
};

const ContentTrainAgain = (props) => {
  const { sum } = props;
  return (
    <ContentTrainCss>
      <Typography.Title level={3} className="title-content-train">
        Train
      </Typography.Title>
      <Typography.Text>
        Are you sure to train all data again with &nbsp;{sum}&nbsp; content
        modify?
      </Typography.Text>
    </ContentTrainCss>
  );
};

ContentTrainAgain.propTypes = {
  sum: PropTypes.number,
};
ContentTrainAgain.defaultProps = {
  sum: 0,
};
