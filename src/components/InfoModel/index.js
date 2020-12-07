import PropTypes from 'prop-types';
import { Tooltip, Typography } from 'antd';
import React, { memo } from 'react';
import { InfoContainer, TemplateInfoCss } from './styled';

const getTypeModel = {
  1: 'Topic',
  2: 'Sentiment',
  3: 'Multiple Topic & Sentiment',
};

const InfoModel = (props) => {
  const {
    dataModel: { totalRows, descriptions, typeModel, config, score },
  } = props;
  return (
    <InfoContainer>
      <Typography.Title className="title-info-model" level={3}>
        Info Model
      </Typography.Title>
      <div className="detail-info">
        <div className="content-total-rows">
          <Tooltip title="Total Buzz" placement="right" color="#108ee9">
            <div className="detail-total-rows">
              {`${totalRows || 0}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
          </Tooltip>
        </div>
        <TemplateInfo key="1" title="Project descriptions">
          {descriptions || ''}
        </TemplateInfo>
        <TemplateInfo title="Training Classification">{getTypeModel[typeModel] || ''}</TemplateInfo>
        <TemplateInfo title="Algorithm">{config?.algorithm?.name || ''}</TemplateInfo>
        <TemplateInfo title="Version">{score?.[0].version || ''}</TemplateInfo>
      </div>
    </InfoContainer>
  );
};

export default memo(InfoModel);

InfoModel.propTypes = {
  dataModel: PropTypes.shape({
    totalRows: PropTypes.number,
    descriptions: PropTypes.string,
    typeModel: PropTypes.number,
    config: PropTypes.instanceOf(Object),
    score: PropTypes.instanceOf(Array),
  }),
};

InfoModel.defaultProps = {
  dataModel: {
    totalRows: 0,
    descriptions: '',
    typeModel: 0,
    config: 0,
    score: [],
  },
};

const TemplateInfo = (props) => {
  const { children, title } = props;
  return (
    <TemplateInfoCss>
      <Typography.Title className="title-template" level={4}>
        {title}
      </Typography.Title>
      <Typography.Text className="descriptions-template">
        {children || "Don't update"}
      </Typography.Text>
    </TemplateInfoCss>
  );
};

TemplateInfo.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
};

TemplateInfo.defaultProps = {
  children: '',
  title: '',
};
