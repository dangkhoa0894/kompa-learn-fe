import React, { memo } from 'react';
import { FaFrown, FaGrinWink, FaMeh } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Typography } from 'antd';
import { MultipleCss } from './styled';

const ItemMultiple = (props) => {
  const { confidence, sentiment, viewConfidence, ...other } = props;
  const renderLabel = () => {
    switch (sentiment.toUpperCase()) {
      case 'POSITIVE':
        return (
          <div className="label positive">
            <div className="contain-tag">
              <FaGrinWink />
              <Typography.Text className="root-label">{other.root_label}</Typography.Text>
              <Typography.Text className="child-label">{other.child_label}</Typography.Text>
            </div>
            {viewConfidence && (
              <Typography.Text className="percent-label">
                &nbsp;
                {parseInt(confidence * 100, 10)} %
              </Typography.Text>
            )}
          </div>
        );
      case 'NEGATIVE':
        return (
          <div className="label negative">
            <div className="contain-tag">
              <FaFrown />
              <Typography.Text className="root-label">{other.root_label}</Typography.Text>
              <Typography.Text className="child-label">{other.child_label}</Typography.Text>
            </div>
            {viewConfidence && (
              <Typography.Text className="percent-label">
                &nbsp;
                {parseInt(confidence * 100, 10)}%
              </Typography.Text>
            )}
          </div>
        );
      case 'NEUTRAL':
        return (
          <div className="label neutral">
            <div className="contain-tag">
              <FaMeh />
              <Typography.Text className="root-label">{other.root_label}</Typography.Text>
              <Typography.Text className="child-label">{other.child_label}</Typography.Text>
            </div>
            {viewConfidence && (
              <Typography.Text className="percent-label">
                &nbsp;
                {parseInt(confidence * 100, 10)} %
              </Typography.Text>
            )}
          </div>
        );
      default:
        return (
          <div className="label">
            <div className="temp contain-tag">
              <FaMeh />
              <Typography.Text className="root-label">{other.root_label}</Typography.Text>
              <Typography.Text className="child-label">{other.child_label}</Typography.Text>
            </div>
          </div>
        );
    }
  };
  return <MultipleCss viewConfidence={viewConfidence}>{renderLabel()}</MultipleCss>;
};

ItemMultiple.propTypes = {
  child_label: PropTypes.string,
  confidence: PropTypes.number,
  root_label: PropTypes.string,
  sentiment: PropTypes.string,
  viewConfidence: PropTypes.bool,
};
ItemMultiple.defaultProps = {
  child_label: '',
  confidence: 0,
  root_label: '',
  sentiment: '',
  viewConfidence: true,
};

export default memo(ItemMultiple);
