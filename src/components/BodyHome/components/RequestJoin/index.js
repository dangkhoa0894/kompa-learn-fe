import React from 'react';
import { Typography } from 'antd';
import LazyLoad from 'react-lazyload';
import { ContainRequest } from './styled';
import ButtonJoin from '../ButtonJoin';

const RequestJoin = () => {
  return (
    <ContainRequest>
      <LazyLoad>
        <Typography.Title className="title animation-text-flip">
          Join top companies using Kompa Learn
        </Typography.Title>

        <Typography.Text className="descriptions animation-text-flip ">
          Request a free demo with our experts
        </Typography.Text>
        <ButtonJoin />
      </LazyLoad>
    </ContainRequest>
  );
};

export default RequestJoin;
