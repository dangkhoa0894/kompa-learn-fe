import React from 'react';
import { ContainerConfig } from './styled';
import ConfigBasic from './components/ConfigBasic';
import ConfigAdvance from './components/ConfigAdvance';

const Config = (props) => {
  return (
    <ContainerConfig>
      <ConfigBasic {...props} />
      <ConfigAdvance {...props} />
    </ContainerConfig>
  );
};

export default Config;
