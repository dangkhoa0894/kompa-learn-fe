import React from 'react';
import { Skeleton } from 'antd';

const SkeletonView = () => {
  return (
    <>
      <Skeleton.Input
        active
        // size={inputSize}
      />
    </>
  );
};

export default SkeletonView;
