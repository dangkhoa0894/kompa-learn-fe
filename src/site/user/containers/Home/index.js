import React from "react";
import HeaderHome from "SRC/components/HeaderHome";
import BodyHome from "SRC/components/BodyHome";
import FooterHome from "SRC/components/FooterHome";
import { WrapperHome } from "./styled";

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
