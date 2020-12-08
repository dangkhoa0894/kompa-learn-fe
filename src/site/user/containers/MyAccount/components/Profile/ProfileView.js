import React, { useState, useRef } from "react";
import { Typography, Input, Row, Col, Checkbox, notification } from "antd";
import FormView from "SRC/components/common/Form";

import { useInfoUser } from "SRC/hooks/User";
import LoadingBlock from "SRC/components/common/LoadingBlock";
import { parseError } from "SRC/utils/function";
import { ContainerProfile, ContainProfile } from "./styled";
import { useUpdateInfoUser } from "./hooks";

const ProfileView = (props) => {
  const infoUser = useInfoUser(props);
  return (
    <ContainerProfile>
      <Profile infoUser={infoUser} />
      <ChangeEmail infoUser={infoUser} />
    </ContainerProfile>
  );
};

export default ProfileView;

export const Profile = ({ infoUser }) => {
  const refFirstName = useRef();
  const refLastName = useRef();
  const [isSendNotification, setIsSendNotification] = useState(false);
  const [doUpdateInfo, { loading }] = useUpdateInfoUser();
  const toggleCheckbox = () => {
    setIsSendNotification(!isSendNotification);
  };
  const onSubmit = async () => {
    const firstName = refFirstName.current.state.value;
    const lastName = refLastName.current.state.value;
    const params = {
      ...infoUser,
      firstName: refFirstName.current.state.value,
      lastName: refLastName.current.state.value,
    };
    try {
      const update = await doUpdateInfo(params);
    } catch (e) {
      notification.error({
        message: "Error Message",
        description: "Update info user fail, please try again !",
      });
    }
  };

  return (
    <ContainProfile>
      <FormView
        title="Profile"
        onSubmit={onSubmit}
        loading={loading}
        textButton="Save Profile"
      >
        {typeof infoUser?.firstName !== "string" ? (
          <LoadingBlock height={180} />
        ) : (
          <>
            <Row align="center" className="row-content">
              <Col className="col-label" xs={{ span: 24 }} md={{ span: 4 }}>
                First Name
              </Col>
              <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
                <Input
                  placeholder="First Name"
                  defaultValue={infoUser?.firstName}
                  ref={refFirstName}
                  className="input"
                />
              </Col>
            </Row>
            <Row align="center" className="row-content">
              <Col className="col-label" xs={{ span: 24 }} md={{ span: 4 }}>
                Last Name
              </Col>
              <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
                <Input
                  placeholder="Last Name"
                  key="lastName"
                  defaultValue={infoUser?.lastName}
                  ref={refLastName}
                  className="input"
                />
              </Col>
            </Row>
          </>
        )}
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 4 }} />
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <div className="check-box" onClick={toggleCheckbox}>
              <Checkbox checked={isSendNotification} />
              &nbsp;
              <Typography.Text>Send email notifications</Typography.Text>
            </div>
          </Col>
        </Row>
      </FormView>
    </ContainProfile>
  );
};

const ChangeEmail = ({ infoUser }) => {
  const [doUpdateInfo, { loading }] = useUpdateInfoUser();
  const refNewEmail = useRef();
  const refPassword = useRef();

  const onSubmit = async () => {
    const params = {
      ...infoUser,
      email: refNewEmail.current.state.value,
      password: refPassword.current.state.value,
    };
    try {
      await doUpdateInfo(params);
    } catch (e) {
      console.log(e);
      notification.error({
        message: "Error Message",
        description: parseError(e).message,
      });
    }
  };

  return (
    <ContainProfile>
      <FormView
        title="Profile"
        onSubmit={onSubmit}
        loading={loading}
        textButton="Save new email"
      >
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 4 }}>
            New Email
          </Col>
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <Input
              placeholder="New Email"
              ref={refNewEmail}
              className="input"
            />
          </Col>
        </Row>
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 4 }}>
            Password
          </Col>
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <Input
              placeholder="Last Name"
              type="password"
              ref={refPassword}
              className="input"
            />
          </Col>
        </Row>
      </FormView>
    </ContainProfile>
  );
};
