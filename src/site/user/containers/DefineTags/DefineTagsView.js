import React, { useRef, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Col, notification, Typography } from "antd";
import { FaTimes } from "react-icons/fa";
import { ERROR_CODE } from "SRC/resource/string";
import { useGetDetailModel } from "SRC/hooks/Model";

import LoadingText from "SRC/components/common/LoadingText";

import {
  IconAddTag,
  Container,
  ContentInput,
  InputTag,
  IconGroup,
  ContentListTags,
  Tag,
  ContentButton,
} from "./styled";
import Title from "SRC/components/common/Title";
import { MainButton } from "SRC/styles/mainStyled";
import { useCreateLabel } from "./hooks";

function DefineTagsView() {
  const { modelId } = useParams();
  const history = useHistory();
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });
  const [doCreateLabel, { loading }] = useCreateLabel();
  const inputRef = useRef(null);
  const [listTags, setListTags] = useState([]);
  // (listAlgorithm.length > 0 && listAlgorithm[0]) || { id: 1 },

  const addTag = () => {
    const inputValue = inputRef.current.state.value;
    if (!inputValue) {
      notification.error({
        message: "Error message",
        description: "Please enter your tag",
      });
      return;
    }
    const hasItem = listTags.some((e) => e.tag === inputValue);
    if (hasItem) {
      notification.error({
        message: "Error message",
        description: "Your tag already exists",
      });
    } else {
      const param = {
        tag: inputValue,
        id: new Date().valueOf(),
      };
      setListTags([...listTags, param]);
      inputRef.current.state.value = "";
    }
  };

  useEffect(() => {
    if (infoModel?.labels) {
      const temp = infoModel.labels.map((label) => {
        return {
          id: label.id,
          tag: label.labelName,
        };
      });
      setListTags(temp);
    }
  }, [infoModel]);

  const removeItem = (value) => {
    const checkExitItem = listTags.filter((e) => e.id !== value.id);
    setListTags(checkExitItem);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTag();
    }
  };

  const nextStep = async () => {
    const data = {
      id: modelId,
      tags: listTags,
    };
    try {
      const updateLabel = await doCreateLabel(data);
      if (updateLabel.data.updateLabelModel.statusCode === ERROR_CODE.SUCCESS) {
        notification.success({
          message: "Success Message",
          description: "Created labels successful !",
        });
        history.push(`/model/setup/train/${modelId}`);
      } else {
        throw new Error(updateLabel.data.updateLabelModel.message);
      }
    } catch (err) {
      notification.error({
        message: "Error message",
        description: err.message,
      });
    }
  };

  return (
    <Container>
      <Title
        label="Define Tags Topic"
        descriptions="Select the columns with Your text data will be classified into the tags you define. you need to create at least two, but you can define more later. Check the tags references for more information and advise, texts. Multiple selected columns while ."
      />
      <ContentInput justify="center" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 18 }}>
          <InputTag
            placeholder="Enter Tag Name"
            ref={inputRef}
            onKeyUp={handleKeyDown}
          />
          <IconGroup>
            <IconAddTag onClick={addTag} />
          </IconGroup>
        </Col>
      </ContentInput>
      <ContentListTags justify="center" align="middle">
        <Col xs={{ span: 24 }} sm={{ span: 18 }}>
          {listTags.map((e) => {
            return (
              <Tag key={e.id}>
                <Typography.Text className="tag-item">{e.tag}</Typography.Text>
                <FaTimes className="icon-close" onClick={() => removeItem(e)} />
              </Tag>
            );
          })}
        </Col>
      </ContentListTags>
      <ContentButton justify="center" align="middle">
        <MainButton
          type="primary"
          disabled={!(listTags.length > 1)}
          onClick={!loading && nextStep}
        >
          {loading ? <LoadingText title="Loading..." /> : "GO TO TRAINING"}
        </MainButton>
      </ContentButton>
    </Container>
  );
}

export default DefineTagsView;
