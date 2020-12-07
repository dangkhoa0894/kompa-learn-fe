import React from 'react';
import { Typography, Checkbox } from 'antd';

import PropTypes from 'prop-types';

const TagSentiment = (props) => {
  const { data, onChoose } = props;

  const handleCheck = () => {
    onChoose(data);
  };

  return (
    <div
      className={`contain-sentiment  ${data.sentimentName.toLowerCase()}`}
      onClick={handleCheck}
      onKeyPress={handleCheck}
      role="presentation"
    >
      <Checkbox checked={data.isChooseSentiment} />
      <Typography.Text className="title">{data.sentimentName}</Typography.Text>
    </div>
  );
};

TagSentiment.propTypes = {
  data: PropTypes.instanceOf(Object),
  onChoose: PropTypes.func,
};

TagSentiment.defaultProps = {
  data: {},
  onChoose: () => {},
};

export default TagSentiment;
