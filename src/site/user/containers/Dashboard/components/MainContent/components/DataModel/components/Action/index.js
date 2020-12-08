import PropTypes from "prop-types";
import React, { useState } from "react";
import { Popover } from "antd";
import { FaEllipsisH } from "react-icons/fa";
import ModalView from "SRC/components/common/Modal";
import RenamePopup from "SRC/components/RenamePopup";
import { TiDeleteOutline } from "react-icons/ti";
import ContentOptions from "../OptionsAction";

const ModelAction = (props) => {
  const { process } = props;
  const [isOpenRename, setIsOpenRename] = useState(false);
  const [dataActive, setDataActive] = useState({});

  const toggleOpenRename = (data = {}) => {
    if (data?.id) {
      setDataActive(data);
    }
    setIsOpenRename((x) => !x);
  };

  const removeModel = (evt) => {
    evt.stopPropagation();
    console.log("", props);
  };

  return (
    <div onClick={(e) => e.stopPropagation()} role="presentation">
      {process === 7 ? (
        <Popover
          getPopupContainer={(trigger) => trigger.parentElement}
          placement="leftTop"
          content={
            <ContentOptions
              {...props}
              toggleOpenRename={(e) => toggleOpenRename(e)}
            />
          }
          trigger="click"
        >
          <div
            className="btn-action"
            onClick={(evt) => {
              evt.stopPropagation();
            }}
            onKeyPress={(evt) => {
              evt.stopPropagation();
            }}
            role="presentation"
          >
            <FaEllipsisH />
          </div>
        </Popover>
      ) : (
        <div
          className="btn-action-remove"
          onClick={removeModel}
          role="presentation"
          onKeyPress={removeModel}
        >
          <TiDeleteOutline />
        </div>
      )}
      <ModalView
        isOpen={isOpenRename}
        content={
          <RenamePopup
            {...dataActive}
            toggleOpenRename={(e) => toggleOpenRename(e)}
          />
        }
        onCancel={toggleOpenRename}
        destroyOnClose
        showFooter={false}
        width="fit-content"
        centered
        maskClosable
      />
    </div>
  );
};

ModelAction.propTypes = {
  process: PropTypes.number,
};

ModelAction.defaultProps = {
  process: 0,
};

export default ModelAction;
