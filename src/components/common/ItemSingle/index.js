import React, { memo } from 'react';
import { FaFrown, FaGrinWink, FaMeh } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { SingleLabelCss } from './styled';

const ItemSingle = (props) => {
  const { confidence, label, mode, viewConfidence, highlight } = props;
  const renderLabel = () => {
    return (
      <div className={`label ${highlight && 'highlight'}`}>
        <div className="single-label">{label}</div>
        {viewConfidence && (
          <div className="single-confidence"> {(confidence * 100).toFixed(2)}%</div>
        )}
      </div>
    );
  };

  const renderSentiment = () => {
    if ((confidence * 100).toFixed(2) > 0 || !viewConfidence) {
      switch (label.toLowerCase()) {
        case 'negative':
          return (
            <div className="sentiment negative">
              <FaFrown />
              <div className="single-label">{label}</div>
              {viewConfidence && (
                <div className="single-confidence"> {(confidence * 100).toFixed(2)}%</div>
              )}
            </div>
          );
        case 'positive':
          return (
            <div className="sentiment positive">
              <FaGrinWink />
              <div className="single-label">{label}</div>
              {viewConfidence && (
                <div className="single-confidence"> {(confidence * 100).toFixed(2)}%</div>
              )}
            </div>
          );
        case 'neutral':
          return (
            <div className="sentiment neutral">
              <FaMeh />
              <div className="single-label">{label}</div>
              {viewConfidence && (
                <div className="single-confidence"> {(confidence * 100).toFixed(2)}%</div>
              )}
            </div>
          );
        default:
          return <div />;
      }
    }
    return null;
  };

  return (
    (confidence !== 0 || !viewConfidence) && (
      <SingleLabelCss viewConfidence={viewConfidence}>
        {mode === 'sentiment' ? renderSentiment() : renderLabel()}
      </SingleLabelCss>
    )
  );
};

ItemSingle.propTypes = {
  confidence: PropTypes.number,
  label: PropTypes.string,
  mode: PropTypes.string,
  viewConfidence: PropTypes.bool,
  highlight: PropTypes.bool,
};
ItemSingle.defaultProps = {
  confidence: 0,
  label: '',
  mode: '',
  viewConfidence: true,
  highlight: false,
};

export default memo(ItemSingle);
