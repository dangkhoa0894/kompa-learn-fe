import PropTypes from "prop-types";
import React from "react";
import { Typography } from "antd";
// import WordCloud from 'SRC/components/common/WordCloud';
import WordCloud from "SRC/components/common/Chart/Am/WordCloud";
import { WrapperWordCloud } from "./styled";

const WordCloudDetailModel = (props) => {
  // eslint-disable-next-line no-unused-vars
  const {
    dataModel: { score },
  } = props;

  let dataScore = {};
  if (score?.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    dataScore = score[0];
  }
  return (
    <WrapperWordCloud>
      <div className="header-word-cloud">
        <Typography.Title level={3}>Word Cloud</Typography.Title>
      </div>
      <div className="body-word-cloud">
        <WordCloud data={dataScore} />
      </div>
    </WrapperWordCloud>
  );
};

export default WordCloudDetailModel;
WordCloudDetailModel.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

WordCloudDetailModel.defaultProps = {
  dataModel: {},
};
