/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Typography, Col, Modal, Button, notification } from "antd";

import { MainButton } from "SRC/styles/mainStyled";
import ModalView from "SRC/components/common/Modal";
import theme from "SRC/styles/theme";
import Title from "SRC/components/common/Title";
import PropTypes from "prop-types";

import { ERROR_CODE } from "SRC/resource/string";
import { useMutation } from "@apollo/client";
import LoadingText from "SRC/components/common/LoadingText";
import { TRAIN_DATA } from "SRC/graphql/Model/Mutations";
import { useInfoUser } from "SRC/hooks/User";
import { useGetDetailModel } from "SRC/hooks/Model";
import { FaArrowRight, FaArrowLeft, FaCopy } from "react-icons/fa";
import ProgressBar from "SRC/components/ProgressBar";
import {
  Container,
  TableTrainData,
  ColContent,
  ColTags,
  ContainerTable,
  Content,
  Action,
  PrevButton,
  NextButton,
  SkipButton,
  TagsHeader,
  ContentTags,
  ContainerProgress,
  ContentProgress,
  ContainSentiment,
  DuplicateContent,
} from "./styled";
import {
  useGetDataByPage,
  useUpdateLabel,
  useSubmitFile,
  useUpdateSentiment,
  useDuplicateContent,
  useValidateValue,
  useNotifyUpload,
} from "./hooks";
import { TagItem } from "./components/TagItem";
import CongratulationsPopup from "./components/CongratulationsPopup";
import TagSentiment from "./components/TagSentiment";

function TrainTagDataView(props) {
  const history = useHistory();
  const { modelId } = useParams();
  const [listTag, setListTag] = useState([]);
  const [listSentiment, setListSentiment] = useState([]);
  const [sizeData, setSizeData] = useState(0);
  const [isOpenTrainPanel, setIsOpenTrainPanel] = useState(false);
  const [contentData, setContentData] = useState([]);
  const [indexData, setIndexData] = useState(0);
  const infoUser = useInfoUser();
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });
  const [getMore, { data, loading: loadingGetData }] = useGetDataByPage({
    modelId,
  });
  const [doUploadFile, { isLoading }] = useSubmitFile();
  const [doTrain, { loading: loadingTrain }] = useMutation(TRAIN_DATA);
  const [doUpdateLabel] = useUpdateLabel();
  const [doUpdateSentiment] = useUpdateSentiment();
  const [doDuplicateContent] = useDuplicateContent();
  const [indexMultiple, setIndexMultiple] = useState(0);
  const doValidate = useValidateValue();
  const isSuccess = useNotifyUpload(infoUser, modelId);

  useLayoutEffect(() => {
    if (data?.data) {
      setContentData(data.data);

      setSizeData(infoModel.totalRows);
      // LABEL =>.>>>
      if (infoModel && infoModel.labels) {
        const tempData = infoModel.labels.map((item) => {
          if (item.id === data?.data[indexMultiple]?.label?.id) {
            return { ...item, isChooseTag: true };
          }
          return { ...item, isChooseTag: false };
        });
        setListTag(tempData);
      }

      // SENTIMENT =>.>>>
      if (infoModel && infoModel.sentiment) {
        const tempDataS = infoModel.sentiment.map((item) => {
          if (item.id === data?.data[indexMultiple]?.sentiment?.id) {
            return { ...item, isChooseSentiment: true };
          }
          return { ...item, isChooseSentiment: false };
        });
        setListSentiment(tempDataS);
      }
    }
  }, [infoModel, data, indexMultiple, indexData]);

  useEffect(() => {
    getMore({ page: indexData });
  }, [indexData]);

  const onChooseTag = (evt) => {
    const tempActiveItem = { ...evt };
    tempActiveItem.isChooseTag = true;
    const labelActive = listTag.find((item) => item.isChooseTag);
    if (!labelActive || tempActiveItem.id !== labelActive.id) {
      doUpdateLabel({
        contentId: contentData[indexMultiple].id,
        label: tempActiveItem,
        modelId: infoModel.id,
        page: indexData,
        indexMultiple,
        totalRows: infoModel.totalRows,
      });
    }
  };
  const onChooseSentiment = (evt) => {
    const tempActiveItem = { ...evt };
    tempActiveItem.isChooseSentiment = true;
    const sentimentActive = listSentiment.find(
      (item) => item.isChooseSentiment
    );
    if (!sentimentActive || tempActiveItem.id !== sentimentActive.id) {
      doUpdateSentiment({
        contentId: contentData[indexMultiple].id,
        sentiment: tempActiveItem,
        modelId: infoModel.id,
        page: indexData,
        indexMultiple,
        totalRows: infoModel.totalRows,
      });
    }
  };

  const onSubmit = () => {
    if (!loadingTrain) {
      doTrain({
        variables: {
          dataInput: {
            modelId: infoModel.id,
          },
        },
      })
        .then((res) => {
          if (res.data.trainModel.statusCode === ERROR_CODE.SUCCESS) {
            history.push("/main/dashboard");
          } else {
            setIsOpenTrainPanel(false);
            Modal.error({
              title: "Error Message",
              content: (
                <div>
                  <p>{res.data.trainModel.message}</p>
                </div>
              ),
              onOk() {},
            });
          }
        })
        .catch(() => {
          Modal.error({
            title: "Error",
            content: (
              <div>
                <p>Server has problem please try again later</p>
              </div>
            ),
            onOk() {},
          });
        });
    }
  };

  const onNext = () => {
    const validateCheck = doValidate({
      infoModel,
      listSentiment,
      listTag,
    });
    if (validateCheck) {
      if (indexMultiple < contentData.length - 1) {
        setIndexMultiple(indexMultiple + 1);
      } else {
        setIndexMultiple(0);
        if (typeof contentData === "object" && indexData < sizeData) {
          //   getMore({ page: indexData + 1 });
          setIndexData((x) => x + 1);
        }
      }
    } else {
      notification.error({
        message: "Error message",
        description: "Please choose both sentiment and label !",
      });
    }
    //   saveTagContent();
  };
  const onPrev = () => {
    const validateCheck = doValidate({
      infoModel,
      listSentiment,
      listTag,
    });
    if (validateCheck) {
      if (indexMultiple === 0) {
        if (typeof contentData === "object" && indexData >= 1) {
          //   getMore({ page: indexData - 1 });
          setIndexData((x) => x - 1);
          setIndexMultiple(0);
        }
      } else {
        setIndexMultiple(indexMultiple - 1);
      }
    } else {
      notification.error({
        message: "Error message",
        description: "Please choose both sentiment and label !",
      });
    }
    //   saveTagContent();
  };

  const duplicateContent = () => {
    doDuplicateContent({
      modelId: parseInt(modelId, 10),
      contentId: contentData[indexMultiple].id,
      page: indexData,
    });
  };

  const onConfirm = () => {
    if (!isLoading) {
      doUploadFile({
        infoUser,
        model: {
          id: infoModel.id,
        },
      })
        .then((res) => {
          if (res.data.sendFileToCore.statusCode === ERROR_CODE.SUCCESS) {
            setIsOpenTrainPanel(true);
          } else {
            Modal.error({
              title: "Error Message",
              content: (
                <div>
                  <p>{res.data.sendFileToCore.message}</p>
                </div>
              ),
              onOk() {},
            });
          }
        })
        .catch(() => {
          Modal.error({
            title: "Error",
            content: (
              <div>
                <p>Server has problem please try again later</p>
              </div>
            ),
            onOk() {},
          });
        });
    }
  };

  const { isShowTitle, isComponent } = props;
  return (
    <Container>
      {isShowTitle && (
        <Title
          Title
          label="Training"
          descriptions="Choose one or more tags that apply and click confirm. As new texts appear, the model will learn from your criteria."
        >
          Tag Data
        </Title>
      )}
      <ContainerTable isComponent={isComponent}>
        <TableTrainData>
          <ColContent xs={{ span: 24 }} md={{ span: 18 }}>
            <Content>
              {/* {!loadingGetData && typeof contentData === 'object' && contentData[indexMultiple]?.id} */}
              {!loadingGetData &&
                typeof contentData === "object" &&
                contentData[indexMultiple]?.content}
            </Content>
            <Action>
              <PrevButton onClick={onPrev}>
                <FaArrowLeft />
                <Typography.Text className="title">Prev</Typography.Text>
              </PrevButton>
              {/* <RemoveButton onClick={onRemoveContent}>
                <DeleteFilled />
              </RemoveButton> */}
              <NextButton onClick={onNext}>
                <SkipButton className="title">Next</SkipButton>
                <FaArrowRight />
              </NextButton>
            </Action>
          </ColContent>
          <ColTags xs={{ span: 24 }} md={{ span: 6 }}>
            {infoModel.typeModel !== 2 && (
              <>
                <TagsHeader>
                  <Typography.Text className="tags-header">
                    Tags
                  </Typography.Text>
                </TagsHeader>
                <ContentTags>
                  {listTag &&
                    listTag.length > 0 &&
                    listTag.map((e) => {
                      return (
                        <TagItem
                          key={e.id}
                          onChoose={(v) => onChooseTag(v)}
                          data={e}
                          content={
                            typeof contentData === "object" && contentData
                          }
                        />
                      );
                    })}
                </ContentTags>
              </>
            )}
            {infoModel.typeModel === 3 && (
              <DuplicateContent>
                <TagsHeader>
                  <Typography.Text className="tags-header">
                    Multiple
                  </Typography.Text>
                </TagsHeader>
                {`${indexMultiple + 1}/${contentData.length}`}
                <div>
                  <Button color="primary" onClick={duplicateContent}>
                    <FaCopy />
                  </Button>
                </div>
              </DuplicateContent>
            )}

            {infoModel.typeModel !== 1 && (
              <ContainSentiment>
                <TagsHeader>
                  <Typography.Text className="tags-header">
                    Sentiment
                  </Typography.Text>
                </TagsHeader>
                <div className="root-sentiment">
                  {listSentiment &&
                    listSentiment.length > 0 &&
                    listSentiment.map((e) => {
                      return (
                        <TagSentiment
                          key={e.id}
                          onChoose={(v) => onChooseSentiment(v)}
                          data={e}
                        />
                      );
                    })}
                </div>
                {/* <TagSentiment /> */}
              </ContainSentiment>
            )}
          </ColTags>
        </TableTrainData>
      </ContainerTable>
      <ContainerProgress>
        <Col xs={{ span: 24 }} md={{ span: 18 }}>
          <ContentProgress>
            <Typography.Text>
              Tagged texts: &nbsp;
              {indexData}
              &nbsp; out of&nbsp;
              {sizeData}
            </Typography.Text>
            <ProgressBar
              percent={
                (typeof contentData === "object" && 100 / sizeData) * indexData
              }
              strokeColor={theme.colors.green.green_1}
              trailColor={theme.colors.green.green_1Light}
            />
          </ContentProgress>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 6 }} className="content-button">
          <MainButton width="150px" type="primary" onClick={onConfirm}>
            {isLoading ? <LoadingText title="Loading" /> : "Confirm"}
          </MainButton>
          <ModalView
            isOpen={isOpenTrainPanel}
            onOk={onSubmit}
            okButtonProps={{ disabled: isSuccess !== 1, type: "primary" }}
            content={<CongratulationsPopup isSuccess={isSuccess} />}
            okText="Training"
            okType="success"
            width="fit-content"
          />
        </Col>
      </ContainerProgress>
    </Container>
  );
}

TrainTagDataView.propTypes = {
  isComponent: PropTypes.bool,
  isShowTitle: PropTypes.bool,
};
TrainTagDataView.defaultProps = {
  isShowTitle: true,
  isComponent: false,
};
export default TrainTagDataView;
