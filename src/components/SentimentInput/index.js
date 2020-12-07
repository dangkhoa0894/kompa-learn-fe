// import PropTypes from 'prop-types';
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { ContainerSentiment } from './styled';
import { useModifySentiment } from './hooks';

const SentimentInput = (props) => {
  const { dataModel } = props;
  const [{ sentimentData, sentimentActive }, updateSentiment] = useModifySentiment(props);

  const onChoose = (item) => {
    updateSentiment(item);
  };

  return (
    <ContainerSentiment spar={`${dataModel.typeModel === 2}`}>
      {sentimentData.map((item) => {
        return (
          <Tooltip key={item.id} placement="topRight" title={item.class}>
            <div
              className={`input-sentiment ${item.class} ${
                item.id === sentimentActive?.id && 'active'
              }`}
              onClick={() => onChoose(item)}
              onKeyPress={() => onChoose(item)}
              role="presentation"
            >
              {item.icon}
            </div>
          </Tooltip>
        );
      })}
    </ContainerSentiment>
  );
};

SentimentInput.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

SentimentInput.defaultProps = {
  dataModel: {},
};

export default memo(SentimentInput);
