import React from "react";
import { Row, Col } from "antd";
import Menu from "SRC/components/common/Menu";
import { FaLock, FaKey, FaIdBadge } from "react-icons/fa";
import { useParams, useRouteMatch, useHistory } from "react-router-dom";
import { ContainerAccount } from "./styled";
import ProfileView from "./components/Profile/ProfileView";
import ApiKeyView from "./components/ApiKey/ApiKeyView";
import ChangePasswordView from "./components/ChangePassword/ChangePasswordView";

const listMenuModifyModel = [
  {
    id: "profile",
    label: "Profile",
    pathName: "profile",
    icon: <FaIdBadge />,
  },
  {
    id: "change-password",
    label: "Change Password",
    pathName: "change-password",
    icon: <FaLock />,
  },
  {
    id: "api-key",
    label: "Api Key",
    pathName: "api-key",
    icon: <FaKey />,
  },
];

const listBody = {
  profile: <ProfileView />,
  "change-password": <ChangePasswordView />,
  "api-key": <ApiKeyView />,
};

const MyAccountView = () => {
  const params = useParams();
  const match = useRouteMatch();
  const history = useHistory();

  const changePage = (value) => {
    //   "/account/:title/:tab"
    const tempPath = match.path.replace(":title", params.title);
    // tempPath = tempPath.replace(":tab", params.tab);
    // tempPath = tempPath.replace(":view", params.view);
    history.push(tempPath.replace(":subMenu", value.pathName));
  };
  return (
    <ContainerAccount>
      <Row>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 8 }}
          className="menu"
        >
          <Menu data={listMenuModifyModel} changePage={changePage} />
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 16 }} sm={{ span: 24 }}>
          {listBody[params.subMenu]}
        </Col>
      </Row>
    </ContainerAccount>
  );
};

export default MyAccountView;
