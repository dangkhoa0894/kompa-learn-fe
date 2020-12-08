import PropTypes from "prop-types";
import React from "react";
import { Modal, Typography } from "antd";
import { useRemoveModel } from "SRC/hooks/Model";
import { useHistory } from "react-router-dom";
import { ContainOptions } from "./styled";

const listActions = [
  {
    label: "Rename",
    id: "rename",
  },
  {
    label: "Modify Training",
    id: "modify-training",
  },
  {
    label: "View Data",
    id: "view-data",
  },
  {
    label: "Remove",
    id: "remove",
  },
  {
    label: "Model Analysis",
    id: "model-analysis",
  },
  {
    label: "Setting",
    id: "setting",
  },
];

const ContentOptions = (props) => {
  const { id, modelName, toggleOpenRename } = props;
  const history = useHistory();
  const [doRemoveModel] = useRemoveModel();

  const handleModel = (evt, key) => {
    evt.stopPropagation();
    evt.preventDefault();
    switch (key) {
      case "remove":
        Modal.confirm({
          title: "Warning message",
          content: `Are you sure you want to remove "${modelName}" model ?`,
          onOk() {
            doRemoveModel({
              modelId: id,
            });
          },
          okButtonProps: { type: "danger" },
          okText: "Remove",
          onCancel() {},
        });

        break;
      case "view-data":
        history.push(`/model/view-data/view/${id}`);
        break;
      case "modify-training":
        history.push(`/model/modify-data/view/${id}`);
        break;
      case "rename":
        toggleOpenRename(props);

        break;
      case "setting":
        history.push(`/model/config/view/${id}`);
        break;
      case "model-analysis":
        history.push(`/model/analysis/view/${id}`);
        break;
      default:
        break;
    }
  };

  return (
    <ContainOptions>
      {listActions.map((item) => {
        return (
          <Typography.Text
            key={item.id}
            className="option-item"
            onClick={(e) => handleModel(e, item.id)}
          >
            {item.label}
          </Typography.Text>
        );
      })}
    </ContainOptions>
  );
};

ContentOptions.propTypes = {
  id: PropTypes.number,
  toggleOpenRename: PropTypes.func,
  modelName: PropTypes.string,
};

ContentOptions.defaultProps = {
  toggleOpenRename: () => {},
  id: 0,
  modelName: "",
};

export default ContentOptions;
