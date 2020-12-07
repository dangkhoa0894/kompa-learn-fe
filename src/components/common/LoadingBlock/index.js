import PropTypes from 'prop-types';
import React from 'react';
import { Skeleton } from 'antd';
import { ContainerLoading } from './styled';

const LoadingBlock = (props) => {
  const { height, size } = props;
  return (
    <ContainerLoading height={height}>
      {Array.from({ length: size }).map((e, index) => {
        return <Skeleton key={`col${index}`} active />;
      })}
    </ContainerLoading>
  );
};

LoadingBlock.propTypes = {
  height: PropTypes.number,
  size: PropTypes.number,
};

LoadingBlock.defaultProps = {
  height: 180,
  size: 1,
};

export default LoadingBlock;
