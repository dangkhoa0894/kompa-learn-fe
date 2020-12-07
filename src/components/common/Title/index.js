import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'antd';
import { TitleContainer } from './styled';

function Title(props) {
  const { label, descriptions } = props;
  return (
    <TitleContainer>
      <Typography.Title level={2} className="title">
        {label}
      </Typography.Title>
      <Typography.Text className="descriptions">{descriptions}</Typography.Text>
    </TitleContainer>
  );
}

Title.propTypes = {
  descriptions: PropTypes.string,
  label: PropTypes.string,
};

Title.defaultProps = {
  label: '',
  descriptions: '',
};

export default Title;
