import React from 'react';
import { WrapperHeader } from './styled';
import CompanyName from '../common/CompanyName';
import MenuHome from './components/Menu';

const HeaderHomeView = () => {
  return (
    <WrapperHeader>
      <CompanyName />
      <MenuHome />
    </WrapperHeader>
  );
};

export default HeaderHomeView;
