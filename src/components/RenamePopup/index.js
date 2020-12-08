import PropTypes from "prop-types";
import React, { useRef } from "react";
import { Typography, Input, Button, notification } from "antd";
import { RENAME_MODEL } from "SRC/graphql/Model/Mutations";
import { useMutation } from "@apollo/client";
import { ERROR_CODE, _TYPENAME } from "SRC/resource/string";
import { ContainerRename } from "./styled";

const RenamePopup = (props) => {
  const [doUpdateName] = useMutation(RENAME_MODEL);
  const refNameModel = useRef(null);
  const { modelName, id, toggleOpenRename } = props;
  const onCancel = () => {
    toggleOpenRename({});
  };

  const doUpdate = () => {
    const { value } = refNameModel.current.state;
    if (value === "") {
      notification.error({
        message: "Error message",
        description: "Invalid model name !",
      });
      return;
    }
    doUpdateName({
      variables: {
        dataInput: {
          newName: value,
          modelId: id,
        },
      },
      update: (cache, { data: { renameModel } }) => {
        try {
          if (renameModel.statusCode === ERROR_CODE.SUCCESS) {
            cache.modify({
              id: `${_TYPENAME.RES_MODEL}:${id}`,
              fields: {
                modelName() {
                  return value;
                },
              },
            });
            notification.success({
              message: "Message",
              description: "Update model name successful",
            });
            toggleOpenRename({});
          } else {
            throw new Error(renameModel.message);
          }
        } catch (e) {
          notification.error({
            message: "Error message",
            description: e.message,
          });
        }
      },
    });
  };
  const handleUp = (event) => {
    if (event.key === "Enter") {
      doUpdate();
    }
  };

  return (
    <ContainerRename>
      <Typography.Title level={4}>Rename Model</Typography.Title>
      <Input
        defaultValue={modelName}
        className="rename-input"
        ref={refNameModel}
        onKeyDown={handleUp}
      />
      <div className="group-btn">
        <div>
          <Button
            color="dashed"
            className="btn-rename cancel"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            color="primary"
            className="btn-rename update"
            onClick={doUpdate}
          >
            Update
          </Button>
        </div>
      </div>
    </ContainerRename>
  );
};

RenamePopup.propTypes = {
  modelName: PropTypes.string,
  id: PropTypes.number,
  toggleOpenRename: PropTypes.func,
};
RenamePopup.defaultProps = {
  modelName: "",
  id: 0,
  toggleOpenRename: () => {},
};

export default RenamePopup;
