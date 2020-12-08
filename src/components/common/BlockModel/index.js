import PropTypes from "prop-types";
import React from "react";
import { Typography } from "antd";
import ImageAsset1 from "SRC/resource/images/Asset1.png";
import ImageAsset2 from "SRC/resource/images/Asset2.png";
import ImageAsset3 from "SRC/resource/images/Asset3.png";
import { TYPE_MODEL } from "SRC/resource/string";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { WrapperBlockModel } from "./styled";

const BlockModel = (props) => {
  const {
    loading,
    modelName,
    descriptions,
    score,
    typeModel,
    animation,
    isMoreTemplate,
  } = props;
  return (
    <WrapperBlockModel animation={animation} isMoreTemplate={isMoreTemplate}>
      {loading ? (
        <Loading mode="panel" />
      ) : (
        <>
          <div className="top-block">
            <div className="top-bl-left">
              <div className="top-bl-left-top">{modelName}</div>
              <div className="top-bl-left-bottom">
                Accuracy:{" "}
                <span className="green-text">
                  {((score[0]?.accuracy || 0) * 100).toFixed(1)} %
                </span>
              </div>
            </div>
            <div className="top-bl-right">
              <img src={ImageAsset1} alt="af" />
            </div>
          </div>
          <div className="body-block">{descriptions}</div>
          <div className="bottom-block">
            {TYPE_MODEL[typeModel - 1]?.icon}
            <Typography.Text>
              {TYPE_MODEL[typeModel - 1]?.label}
            </Typography.Text>
          </div>
        </>
      )}
    </WrapperBlockModel>
  );
};

BlockModel.propTypes = {
  loading: PropTypes.bool,
  modelName: PropTypes.string,
  descriptions: PropTypes.string,
  score: PropTypes.instanceOf(Array),
  typeModel: PropTypes.number,
  animation: PropTypes.bool,
  isMoreTemplate: PropTypes.bool,
};
BlockModel.defaultProps = {
  loading: true,
  modelName: "default",
  descriptions: `Don't update`,
  score: {},
  typeModel: 1,
  animation: false,
  isMoreTemplate: true,
};
export default BlockModel;
