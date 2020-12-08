/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from "react";
import { Typography, Checkbox, Input, Alert } from "antd";
import ModalView from "SRC/components/common/Modal";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { CloseOutlined } from "@ant-design/icons";
import { InputTag, TagItemContent } from "./styled";

export const TagItem = (props) => {
  // eslint-disable-next-line react/prop-types
  const { data, onRemove, isModify } = props;
  const [isChooseTag, setIsChooseTag] = useState(data.isChooseTag);
  const [isConfirmRemove, setIsConfirmRemove] = useState(false);
  const onChoose = () => {
    props.onChoose(data);
  };

  useEffect(() => {
    setIsChooseTag(data.isChooseTag);
  }, [data.isChooseTag]);

  const openConfirm = () => {
    setIsConfirmRemove(!isConfirmRemove);
  };

  const removeItem = () => {
    onRemove(data);
    openConfirm();
  };
  return (
    <TagItemContent isModify={isChooseTag}>
      <Checkbox
        checked={isChooseTag}
        disabled={isModify}
        onChange={() => onChoose()}
      >
        <InputTag>
          {!isModify ? (
            <Typography.Text>{data?.labelName}</Typography.Text>
          ) : (
            <Input defaultValue={data?.labelName} />
          )}
          {isModify && <CloseOutlined onClick={openConfirm} />}
          <ModalView
            isOpen={isConfirmRemove}
            onOk={removeItem}
            onCancel={openConfirm}
            title="Delete Tag"
            content={
              <Alert
                message={`Are you sure you want to delete "${data?.label}" ?`}
                type="warning"
              />
            }
            okType="danger"
          />
        </InputTag>
      </Checkbox>
    </TagItemContent>
  );
};

TagItem.propTypes = {
  onRemove: PropTypes.func,
  onChoose: PropTypes.func,
  data: PropTypes.instanceOf(Object),
};
TagItem.defaultProps = {
  onRemove: () => {},
  onChoose: () => {},
  data: {},
};
