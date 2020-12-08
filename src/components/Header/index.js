import React from "react";
import { Row, Col } from "antd";
import Breadcrumb from "SRC/components/common/Breadcrumb";
import { LinkLogo, HeaderContainer } from "./styled";
import TabMenu from "./components/TabMenu";
import UserAction from "./components/UserAction";
import MenuMobile from "./components/MenuMobile";
import "antd/dist/antd.css";

const headerType = {
  profile: ["breadcrumb", "createModel"],
  model: ["breadcrumb", "setting"],
  home: ["logo", "menu", "createModel"],
};

function Header(props) {
  const listComponentsHeader = headerType[props?.type];
  const isMenu = listComponentsHeader.includes("menu");

  return (
    <HeaderContainer align="middle">
      {listComponentsHeader.map((item) => {
        return (
          <RenderComponents
            key={item}
            item={item}
            isMenu={isMenu}
            // eslint-disable-next-line
            {...props}
          />
        );
      })}
      <Col xs={{ span: 4 }} className="menu-mobile">
        <MenuMobile />
      </Col>
    </HeaderContainer>
  );
}

Header.defaultProps = {
  type: "home",
  infoUser: {},
};
export default Header;

const RenderComponents = (props) => {
  const renderComponents = (data, isMenu) => {
    switch (data) {
      case "breadcrumb":
        return <BreadcrumbCustom isMenu={isMenu} />;
      case "logo":
        return <LogoCompany isMenu={isMenu} />;
      case "createModel":
        return (
          <UserActionCustom
            isCreate
            isMenu={isMenu}
            // eslint-disable-next-line
            {...props}
          />
        );
      case "setting":
        return (
          <UserActionCustom
            isCreate={false}
            isMenu={isMenu}
            // eslint-disable-next-line
            {...props}
          />
        );
      case "menu":
        return <MenuCustom />;
      default:
        return null;
    }
  };
  return renderComponents(props.item, props.isMenu);
};

const LogoCompany = (props) => {
  return (
    <Col xs={{ span: 20 }} lg={{ span: props?.isMenu ? 8 : 12 }}>
      <Row justify="start">
        <LinkLogo to={{ pathname: "/" }}>
          <div className="logo" />
          {/* <Typography.Text className="company-name">Kompa</Typography.Text> */}
        </LinkLogo>
      </Row>
    </Col>
  );
};

const MenuCustom = () => {
  return (
    <Col className="menu-tablet" lg={{ span: 8 }}>
      <Row justify="center">
        <TabMenu />
      </Row>
    </Col>
  );
};

const UserActionCustom = (props) => {
  return (
    <Col className="menu-tablet" lg={{ span: props?.isMenu ? 8 : 12 }}>
      <Row justify="end">
        <UserAction isCreate={props?.isCreate} infoUser={props?.infoUser} />
      </Row>
    </Col>
  );
};

const BreadcrumbCustom = (props) => {
  return (
    <Col xs={{ span: 20 }} lg={{ span: props?.isMenu ? 8 : 12 }}>
      <Row justify="start">
        <Breadcrumb />
      </Row>
    </Col>
  );
};
