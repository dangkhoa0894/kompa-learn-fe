import React, { useRef, useState } from "react";
import FormView from "SRC/components/common/Form";
import { Row, Col, Input, Modal, notification } from "antd";
import { CHANGE_PASSWORD } from "SRC/graphql/User/Mutations";
import { useMutation } from "@apollo/client";
import { useInfoUser } from "SRC/hooks/User";
import { parseError } from "SRC/utils/function";
import { useHistory } from "react-router-dom";
import { ContainerChangePassword } from "./styled";
// CHANGE_PASSWORD
const ChangePasswordView = (props) => {
  const history = useHistory();
  const refCurrentPassword = useRef();
  const refNewPassword = useRef();
  const refReNewPassword = useRef();
  const [isSubmit, setIsSubmit] = useState(false);
  const infoUser = useInfoUser(props);
  const [doUpdatePassword, { loading }] = useMutation(CHANGE_PASSWORD);

  const onSubmit = () => {
    doUpdatePassword({
      variables: {
        username: infoUser.username,
        password: refCurrentPassword.current.state.value,
        newPassword: refNewPassword.current.state.value,
      },
    })
      .then((res) => {
        Modal.success({
          title: "Message",
          content: (
            <div>
              <p>{res.data.changePassword.message}</p>
            </div>
          ),
          okText: "Ok",
          onOk() {
            refCurrentPassword.current.state.value = "";
            refNewPassword.current.state.value = "";
            history.push(`/account/my-account/profile`);
          },
        });
      })
      .catch((err) => {
        notification.error({
          message: "Error Message",
          description: parseError(err).message,
        });
      });
  };
  const reEnterPassword = (data) => {
    const newPassword = refNewPassword.current.state.value;
    const rePassword = data.target.value;
    if (newPassword === rePassword) {
      setIsSubmit(true);
      return;
    }

    setIsSubmit(false);
  };
  return (
    <ContainerChangePassword>
      <FormView
        title="Change Password"
        onSubmit={onSubmit}
        textButton="Save"
        disableButton={!isSubmit}
      >
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 8 }}>
            Verify Current Password
          </Col>
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <Input
              placeholder="Current Password"
              type="password"
              key="old-password"
              ref={refCurrentPassword}
              className="input"
            />
          </Col>
        </Row>
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 8 }}>
            New Password
          </Col>
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <Input
              placeholder="New Password"
              type="password"
              ref={refNewPassword}
              className="input"
            />
          </Col>
        </Row>
        <Row align="center" className="row-content">
          <Col className="col-label" xs={{ span: 24 }} md={{ span: 8 }}>
            Confirm New Password
          </Col>
          <Col className="col-input" xs={{ span: 24 }} md={{ span: 12 }}>
            <Input
              placeholder="Confirm new password"
              type="password"
              ref={refReNewPassword}
              onChange={reEnterPassword}
              className="input"
            />
          </Col>
        </Row>
      </FormView>
    </ContainerChangePassword>
  );
};

export default ChangePasswordView;
