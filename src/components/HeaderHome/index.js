import React from "react";
import { Col, Typography } from "antd";
import ButtonJoin from "SRC/components/BodyHome/components/ButtonJoin";
import MenuHome from "../MenuHome";
import { WrapperHeader, RowBanner } from "./styled";

const HeaderHomeView = () => {
  return (
    <WrapperHeader>
      <MenuHome />
      <RowBanner>
        <Col xs={{ span: 24 }} md={{ span: 12 }} className="title-banner">
          <Typography.Title level={1} className="color-title">
            Create new value from your data
          </Typography.Title>
          <Typography.Text className="color-title">
            Train custom machine learning models to get topic, sentiment,
            intent, keywords and more. Do it in hours —not weeks— right inside
            the tools you already love.
          </Typography.Text>
          <ButtonJoin />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }} className="image-banner">
          <img
            src="https://cdn.dribbble.com/users/642843/screenshots/11979235/media/346c6cc17e3283decedfe1a79dcde804.jpg"
            alt="hinh gi do"
          />
        </Col>
      </RowBanner>
    </WrapperHeader>
  );
};

export default HeaderHomeView;
