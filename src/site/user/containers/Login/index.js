import React, { useRef, useState } from "react";
import { Typography, Button } from "antd";
import InputN from "SRC/components/common/Input";
import CompanyName from "SRC/components/common/CompanyName";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { LOGIN } from "SRC/graphql/User/Mutations";
import { storageCode, ERROR_CODE } from "SRC/resource/string";
import { WrapperLogin } from "./styled";

const LoginView = () => {
  const history = useHistory();
  const [doLogin] = useMutation(LOGIN);
  const refUserName = useRef(null);
  const refPassword = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");

  const onLogin = () => {
    const useName = refUserName.current.value.trim();
    const password = refPassword.current.value.trim();
    if (!useName || !password) {
      setErrorMessage("Please enter useName, password !");
      return;
    }
    doLogin({
      variables: {
        dataInput: {
          username: useName,
          password,
        },
      },
    })
      .then((res) => {
        if (res.data.login.statusCode === ERROR_CODE.SUCCESS) {
          localStorage.setItem("token", res.data.login.token);
          localStorage.setItem("refreshToken", res.data.login.refreshToken);
          localStorage.setItem(
            storageCode.DATA_USER,
            JSON.stringify(res.data.login.user)
          );
          history.push("/main/dashboard");
        } else {
          setErrorMessage(res.data.login.message);
        }
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onLogin();
    }
  };

  const handleUp = (event) => {
    if (event.key === "Enter") {
      refPassword.current.focus();
    }
  };

  return (
    <WrapperLogin>
      <div className="logo-company">
        <CompanyName color="black" />
      </div>
      <div className="container-login">
        <Typography.Title level={2} className="title">
          Login
        </Typography.Title>

        <div className="contain-input">
          <InputN
            ref={refUserName}
            label="Email address"
            height={40}
            autoFocus
            onKeyDown={handleUp}
          />
          <InputN
            ref={refPassword}
            height={40}
            type="password"
            label="Password"
            margin=" 0px"
            autoComplete="false"
            onKeyDown={handleKeyDown}
          />
          <Typography.Text className="forgot-password">
            Forgot your password ?
          </Typography.Text>
          <Typography.Text type="danger" className="error">
            {errorMessage}
          </Typography.Text>
          <Button type="primary" onClick={onLogin} className="btn-login">
            Login
          </Button>
        </div>
      </div>
    </WrapperLogin>
  );
};

export default LoginView;
