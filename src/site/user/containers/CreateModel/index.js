import PropTypes from "prop-types";
import React, { useState, memo, useCallback, useRef, useEffect } from "react";
import { Typography, Input, Col, notification } from "antd";
import SentimentAnalysis from "SRC/resource/images/SentimentAnalysis.png";
import TopicDetection from "SRC/resource/images/TopicDetection.png";
import MultipleTopicSentiment from "SRC/resource/images/MultipleTopicSentiment.png";
import RawData from "SRC/resource/images/Raw data.png";
import DataFormatted from "SRC/resource/images/DataFormatted.png";
import SentimentImage from "SRC/resource/images/Sentiment.png";
import TopicImage from "SRC/resource/images/Topic.png";
import { MainButton } from "SRC/styles/mainStyled";
import LoadingText from "SRC/components/common/LoadingText";
import { useMutation } from "@apollo/client";
import { CREATE_MODEL } from "SRC/graphql/Model/Mutations";
import { ERROR_CODE } from "SRC/resource/string";
import { useHistory } from "react-router-dom";
import {
  WrapperCreateModel,
  ContainerItem,
  RowClassification,
  ContainItem,
  GroupButton,
} from "./styled";

const CreateModel = () => {
  // 1: topic
  // 2: sentiment
  // 3: multiple
  const [classification, setClassification] = useState(1);
  const [typeData, setTypeData] = useState(1);
  const history = useHistory();
  const refModelName = useRef(null);
  const refModelDescription = useRef(null);
  const [createModel] = useMutation(CREATE_MODEL);

  const handleChooseClassification = useCallback((data) => {
    setClassification(data);
  }, []);

  const handleChooseTypeData = useCallback((data) => {
    setTypeData(data);
  }, []);

  const submit = async () => {
    const modelName = refModelName.current.state.value;
    const modelDescription = refModelDescription.current.state.value;
    if (!modelName) {
      notification.error({
        message: "Error message",
        description: "Please enter model name.",
      });
      return;
    }
    const params = {
      modelType: classification,
      modelTypeData: typeData,
      modelName,
      modelDescription,
    };
    try {
      const res = await createModel({
        variables: {
          dataInput: {
            ...params,
          },
        },
      });
      if (res.data.createModel.statusCode === ERROR_CODE.SUCCESS) {
        notification.success({
          message: "Message",
          description: "Create new model successful.",
        });
        history.push(`/model/setup/upload/${res.data.createModel.data.id}`);
      } else {
        throw new Error(res.data.createModel.message);
      }
    } catch (err) {
      notification.error({
        message: "Error message",
        description: err.message,
      });
    }
  };

  useEffect(() => {
    const actionKey = (evt) => {
      switch (evt.keyCode) {
        case 27:
          history.goBack();
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", actionKey, false);
    return () => {
      document.removeEventListener("keydown", actionKey, false);
    };
  }, []);

  const changePage = () => {
    history.push(`/model/create`);
  };
  const imageTypeData =
    // eslint-disable-next-line no-nested-ternary
    classification === 1
      ? TopicImage
      : classification === 2
      ? SentimentImage
      : DataFormatted;

  return (
    <WrapperCreateModel>
      <div className="root">
        <Typography.Title level={2} className="title" onClick={changePage}>
          Create new Model
        </Typography.Title>
        <TemplateContent title="At first, let naming your new Training Project">
          <Input
            ref={refModelName}
            className="model-name"
            placeholder="Model name"
          />
        </TemplateContent>
        {/* Descriptions */}
        <TemplateContent title="Project Description">
          <Input.TextArea
            ref={refModelDescription}
            rows={3}
            autoSize={false}
            className="model-description"
          />
        </TemplateContent>
        {/* Classification */}
        <TemplateContent title="What kind of classification  do you want to do ?">
          <RowClassification gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
              <Item
                srcImage={MultipleTopicSentiment}
                label="Multiple Topic Sentiment"
                active={classification === 3}
                onClick={() => handleChooseClassification(3)}
              />
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Item
                srcImage={SentimentAnalysis}
                label="Sentiment Analysis"
                active={classification === 2}
                onClick={() => handleChooseClassification(2)}
              />
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 6 }}>
              <Item
                srcImage={TopicDetection}
                label="Topic Detection"
                active={classification === 1}
                onClick={() => handleChooseClassification(1)}
              />
            </Col>
          </RowClassification>
        </TemplateContent>
        {/* TYPE DATA */}
        <TemplateContent title="What kind of data  do you want upload ?">
          <RowClassification gutter={[32, 0]}>
            <Col xs={{ span: 12 }}>
              <Item
                srcImage={RawData}
                mode="type-data"
                label="Raw Data"
                active={typeData === 1}
                onClick={() => handleChooseTypeData(1)}
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <Item
                srcImage={imageTypeData}
                mode="type-data"
                label="Formatted Data"
                active={typeData === 2}
                onClick={() => handleChooseTypeData(2)}
              />
            </Col>
          </RowClassification>
        </TemplateContent>
        <TemplateContent>
          <GroupButton>
            <MainButton type="primary" onClick={submit}>
              {false ? <LoadingText title="Loading" /> : "Next"}
            </MainButton>
          </GroupButton>
        </TemplateContent>
      </div>
    </WrapperCreateModel>
  );
};

export default CreateModel;

const TemplateContent = (props) => {
  const { title, children } = props;
  return (
    <ContainerItem>
      <Typography.Text className="title-template">{title}</Typography.Text>
      <div className="content">{children}</div>
      <br />
    </ContainerItem>
  );
};

TemplateContent.propTypes = {
  children: PropTypes.instanceOf(Object),
  title: PropTypes.string,
};
TemplateContent.defaultProps = {
  children: null,
  title: "",
};

const Item = memo((props) => {
  const { label, srcImage, active, onClick, mode } = props;
  return (
    <ContainItem active={active} onClick={() => onClick()} mode={mode}>
      <img src={srcImage} alt={label} />
      <Typography.Text className="title-item">{label}</Typography.Text>
    </ContainItem>
  );
});

Item.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  srcImage: PropTypes.string,
  active: PropTypes.bool,
  mode: PropTypes.string,
};

Item.defaultProps = {
  mode: "classification",
  onClick: () => {},
  label: "Default",
  srcImage: "asdf",
  active: false,
};
