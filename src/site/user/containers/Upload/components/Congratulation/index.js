import React from 'react';
import { Typography } from 'antd';
import { PopupContainer } from './styled';

const Congratulations = () => {
  return (
    <PopupContainer>
      <Typography.Title level={1}>Congratulations!</Typography.Title>
      <br />
      <Typography.Text>
        You have trained your model for the first time! You can test it out right away or keep
        training it in order to build accuracy up
      </Typography.Text>
      <br />
    </PopupContainer>
  );
};

export default Congratulations;
