import React from "react";
import { Row, Avatar, Button } from "antd";
import {
  CardContainer,
  ColTitle,
  ColAvatar,
  ColContent,
  IconTickHover,
  IconDownload,
} from "./styled";
import { DownloadOutlined } from "@ant-design/icons";
import { FaCheck } from "react-icons/fa";
function Card(props) {
  const renderIcon = () => {
    switch (props.type) {
      case "tick":
        return (
          <IconTickHover>
            <FaCheck />
          </IconTickHover>
        );
      case "download":
        return (
          <IconDownload>
            <DownloadOutlined />
          </IconDownload>
        );
      default:
    }
  };
  return (
    <CardContainer>
      <ColAvatar justify="center" align="middle">
        <Avatar src={props.avatar}></Avatar>
      </ColAvatar>
      <Row justify="center" align="middle">
        <ColTitle>{props.title}</ColTitle>
      </Row>
      <Row justify="center" align="middle" style={{ flex: 1 }}>
        <ColContent>{props.content}</ColContent>
      </Row>
      <Row justify="center" align="middle">
        <Button type="primary">{props.labelButton}</Button>
      </Row>
      {renderIcon()}
    </CardContainer>
  );
}
Card.defaultProps = {
  type: "tick",
};
export default Card;
