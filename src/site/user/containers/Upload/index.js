import React, { useState, useEffect } from "react";
import { Typography, Upload, notification, Modal } from "antd";
import { UPLOAD_DATA_RAW, TRAIN_DATA } from "SRC/graphql/Model/Mutations";
import { useMutation, useSubscription } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { ERROR_CODE } from "SRC/resource/string";
import { MainButton } from "SRC/styles/mainStyled";
import LoadingText from "SRC/components/common/LoadingText";
import ModalView from "SRC/components/common/Modal";
import { useGetDetailModel } from "SRC/hooks/Model";
import Loading3 from "SRC/resource/images/Loading3.gif";
import ProgressBar from "SRC/components/ProgressBar";
import Title from "SRC/components/common/Title";
import { SUBSCRIPTIONS_UPLOAD_MODEL } from "SRC/graphql/Model/Subscriptions";
import { useInfoUser } from "SRC/hooks/User";
import { UploadContainer, UploadCss, LinkCss } from "./styled";
import SuccessUpload from "./components/SuccessUpload";
import Congratulations from "./components/Congratulation";

const UploadView = () => {
  const [doUploadFile, { loading }] = useMutation(UPLOAD_DATA_RAW);
  const [doTrain, { loading: loadingTrain }] = useMutation(TRAIN_DATA);
  const [isSuccess, setIsSuccess] = useState(0);
  const { modelId } = useParams();
  const history = useHistory();
  const [file, setFile] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [percent, setPercent] = useState(0);
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });
  const infoUser = useInfoUser();
  const { data: uploadModel } = useSubscription(SUBSCRIPTIONS_UPLOAD_MODEL, {
    variables: { userId: infoUser.id },
  });

  const handleUploadFile = async (evt) => {
    try {
      setPercent(10);
      const res = await doUploadFile({
        variables: {
          dataInput: {
            modelId: parseInt(modelId, 10),
            size: evt.size,
            file: evt,
          },
        },
      });

      if (res.data.upLoadFileRaw.statusCode === ERROR_CODE.SUCCESS) {
        if (infoModel.typeData === 2) {
          return;
        }
        history.push(`/model/setup/column/${modelId}`);
      } else {
        setIsOpen(false);
        throw new Error(res.data.upLoadFileRaw.message);
      }
    } catch (err) {
      setIsSuccess(-1);
      setPercent(0);
      notification.error({
        message: "Error message",
        description: err.message,
      });
    }
  };
  useEffect(() => {
    if (
      uploadModel?.notifyUpload &&
      uploadModel.notifyUpload.statusCode === ERROR_CODE.SUCCESS
    ) {
      if (uploadModel.notifyUpload.data.model_id === modelId) {
        setIsSuccess(1);
      }
    }
  }, [uploadModel, modelId]);

  useEffect(() => {
    if (infoModel && infoModel.process === 2) {
      setPercent(50);
    }
  }, [infoModel]);

  useEffect(() => {
    let interval = {};
    if (file.uid) {
      interval = setInterval(() => {
        const tempPer = percent + 10;
        setPercent(tempPer);
      }, 2000);
      if (percent >= 50) {
        clearInterval(interval);
      }
      if (isSuccess === -1) {
        clearInterval(interval);
        setFile({});
        setPercent(0);
      }
    }
    return () => clearInterval(interval);
  }, [file, percent, isSuccess]);

  useEffect(() => {
    let interval = {};
    if (isSuccess === 1) {
      interval = setInterval(() => {
        const tempPer = percent + 10;
        setPercent(tempPer);
      }, 1000);
      if (percent >= 100) {
        setPercent(100);
        clearInterval(interval);
      }
    }
    return () => clearInterval(interval);
  }, [isSuccess, percent]);

  const trainModel = async () => {
    if (!loadingTrain) {
      try {
        const res = await doTrain({
          variables: {
            dataInput: {
              modelId: infoModel.id,
            },
          },
        });
        if (res.data.trainModel.statusCode === ERROR_CODE.SUCCESS) {
          history.push("/main/dashboard");
        } else {
          setIsOpen(false);
          throw new Error(res.data.trainModel.message);
        }
      } catch (e) {
        Modal.error({
          title: "Error",
          content: (
            <div>
              <p>{e.message}</p>
            </div>
          ),
          onOk() {},
        });
      }
    }
  };

  const changePage = () => {
    history.push("/main/dashboard");
  };

  useEffect(() => {
    if (file.type) {
      file.status = "done";
      setFile(file);
    }
  }, [file]);

  const optoins = {
    fileList: file?.uid && [file],
    disabled: false,
    beforeUpload: (evt) => {
      setFile(evt);
      setPercent(0);
      handleUploadFile(evt);
      setIsSuccess(0);
      return false;
    },
    onRemove: () => {
      setFile({});
    },
  };
  const isUpload = loading || (percent !== 100 && percent !== 0);
  return (
    <UploadContainer>
      <Title
        Title
        label=" Upload file"
        descriptions=" Choose an file that contains the text data that you will use to train your model"
      >
        Tag Data
      </Title>
      <div className="root-upload">
        <Upload.Dragger {...optoins}>
          <UploadCss isSuccess={isUpload || isSuccess !== 0}>
            {isUpload ? (
              <>
                <div className="upload-loading">
                  <img src={Loading3} alt="loading" />
                  <div className="percent-upload"> {percent}%</div>
                </div>
                <br />
                <ProgressBar percent={percent} height="10px" />
                <br />
              </>
            ) : (
              <SuccessUpload isSuccess={isSuccess} />
            )}
          </UploadCss>
        </Upload.Dragger>
      </div>
      <br />
      <br />
      <Typography.Text>
        Please upload files under 2MB. The system only accepts XLSX & CSV file
      </Typography.Text>
      <Typography.Text>
        Don't you have one? Try a sample dataset from our &nbsp;
        <LinkCss to="/">Sample Library</LinkCss>
      </Typography.Text>
      <br />
      <br />
      <MainButton
        type="primary"
        disabled={percent === 0}
        onClick={() => (percent !== 100 ? changePage() : setIsOpen(true))}
      >
        {percent !== 100 ? "Wait in Dashboard" : " Go to Training"}
      </MainButton>
      <ModalView
        isOpen={isOpen}
        onOk={trainModel}
        content={<Congratulations />}
        okText={loadingTrain ? <LoadingText title="Loading" /> : "Training"}
        okType="success"
        width="fit-content"
      />
    </UploadContainer>
  );
};

export default UploadView;
