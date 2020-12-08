import PropTypes from "prop-types";
import React from "react";
import { Row, Col, Avatar, Popover, Typography, Skeleton } from "antd";
import { FaEllipsisV } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { getDataLocalStorage } from "SRC/utils/function";
import { storageCode } from "SRC/resource/string";
import {
  BlockContainer,
  ActionModel,
  ContainerLoading,
  ContentStatus,
} from "./styled";
/* eslint-disable */
const IconTypes = {
  1: "https://static.monkeylearn.com/static/topic-d244d84738e80b9cca950c2cc6127971.svg",
  2: "https://static.monkeylearn.com/static/sentiment-c6456ad4f14377dad8d51e1f0e9a4679.svg",
};
function BlockItem(props) {
  const history = useHistory();
  // eslint-disable-next-line camelcase
  const {
    typeModel,
    type,
    loading,
    view,
    model_id,
    description,
    avatar,
    onRemove,
    label,
    status,
    model_name,
    listModelUser,
  } = props;

  const isInfo = type === "info";
  const handleRemove = () => {
    // evt.stopPropagation();
    // evt.preventDefault();
    onRemove({ model_id, model_name });
  };

  const setRecentlyModel = (itemAdd, listModelUser, localRecently) => {
    let indexExistItem = localRecently.indexOf(itemAdd);
    if (indexExistItem !== -1) {
      localRecently.splice(indexExistItem, 1);
    }
    if (localRecently.length === 4 && indexExistItem === -1) {
      localRecently.pop();
    }
    localRecently.unshift(itemAdd);
    localRecently = [...new Set(localRecently)];

    const existItem = (id) => {
      return listModelUser.some((item) => item.model_id === id);
    };

    let newListRecently = localRecently.filter((item) => {
      if (existItem(item)) {
        return item;
      }
    });

    return newListRecently;
  };

  const changePage = () => {
    if (parseInt(status, 10) === 1) {
      let tempPath = "";
      tempPath = "/models/{0}/{1}/{2}/test/demo".format(
        view,
        typeModel || "default",
        model_id
      );
      let tempLocalData = getDataLocalStorage(storageCode.RECENTLY_MODEL);
      if (tempLocalData && typeof tempLocalData === "object") {
        tempLocalData = setRecentlyModel(
          model_id,
          listModelUser,
          tempLocalData
        );
        localStorage.setItem(
          storageCode.RECENTLY_MODEL,
          JSON.stringify(tempLocalData)
        );
      } else {
        localStorage.setItem(
          storageCode.RECENTLY_MODEL,
          JSON.stringify([model_id])
        );
      }
      history.push(tempPath);
    }
  };
  return loading ? (
    <LoadingBlock />
  ) : (
    <BlockContainer onClick={changePage} status={status}>
      <Row justify="space-between" align="middle" className="avatar-group">
        <Col>
          <Avatar
            size="50"
            src={IconTypes[type] || avatar}
            className="avatar"
          />
        </Col>
        {!isInfo && (
          <Col>
            <Popover
              className="popover"
              placement="leftTop"
              title=""
              content={<ContentPopover onRemove={handleRemove} />}
              trigger="click"
            >
              {onRemove && (
                <FaEllipsisV
                  className="icon-more"
                  onClick={(evt) => evt.stopPropagation()}
                />
              )}
            </Popover>
          </Col>
        )}
      </Row>
      <Row justify="start" className="content-group">
        <Col xs={24} className="title-content">
          {/* eslint-disable-next-line camelcase */}
          <Typography.Text>{model_name}</Typography.Text>
        </Col>
        <Col xs={24}>
          <Typography.Text className="content">{description}</Typography.Text>
        </Col>
      </Row>
      {!typeModel && (
        <Row justify="start">
          <Col>
            <ModelStatus status={status} />
          </Col>
        </Row>
      )}
    </BlockContainer>
  );
}

BlockItem.defaultProps = {
  type: "models",
  view: "dashboard",
  avatar: "https://laptops.vn/static/img/default.jpg",
  description: "",
  model_id: null,
  label: "",
  typeModel: "",
  loading: false,
  //   onRemove: () => {},
  status: 0,
  listModelUser: [],
};

BlockItem.propTypes = {
  avatar: PropTypes.string,
  description: PropTypes.string,
  loading: PropTypes.bool,
  model_id: PropTypes.any,
  status: PropTypes.number,
  label: PropTypes.string,
  type: PropTypes.any,
  view: PropTypes.string,
  typeModel: PropTypes.string,
  onRemove: PropTypes.func,
  //   listModelUser: PropTypes.instanceOf(Array),
};

export default BlockItem;

const ContentPopover = (props) => {
  const handleRemove = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    props.onRemove(evt);
  };

  return (
    <ActionModel>
      <div
        onClick={handleRemove}
        role="button"
        tabIndex="0"
        onKeyPress={handleRemove}
      >
        Delete
      </div>
    </ActionModel>
  );
};

ContentPopover.propTypes = {
  onRemove: PropTypes.func,
};

ContentPopover.defaultProps = {
  onRemove: () => {},
};

const LoadingBlock = () => {
  return (
    <ContainerLoading>
      <Skeleton active />
    </ContainerLoading>
  );
};

const ModelStatus = (props) => {
  const { status } = props;
  const renderStatus = (status) => {
    switch (status) {
      case 0:
        return <span className="pending value-status">Pending</span>;
      case 1:
        return <span className="trained value-status">Trained</span>;
      default:
        return <span className="error value-status">Error</span>;
    }
  };
  return (
    <ContentStatus>
      <span className="label-status">Status:</span>
      {renderStatus(status)}
    </ContentStatus>
  );
};
