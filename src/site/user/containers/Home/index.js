import React from 'react';
import HeaderHome from 'components/HeaderHome';
import BodyHome from 'components/BodyHome';
import FooterHome from 'components/FooterHome';
import { WrapperHome } from './styled';

const HomeView = () => {
  return (
    <WrapperHome>
      <HeaderHome />
      <BodyHome />
      <FooterHome />
    </WrapperHome>
  );
};

export default HomeView;
