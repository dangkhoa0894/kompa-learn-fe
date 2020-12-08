import PropTypes from "prop-types";
import Loading from "SRC/resource/images/Loading2.gif";
import React from "react";
import { Typography } from "antd";
import { ContainerLoading } from "./styled";

const LoadingText = (props) => {
  const { title, colorText } = props;
  return (
    <ContainerLoading color={colorText}>
      <Typography.Text>{title}</Typography.Text>
      &nbsp;
      <img src={Loading} alt="Loading" />
    </ContainerLoading>
  );
};

LoadingText.propTypes = {
  title: PropTypes.string,
  colorText: PropTypes.string,
};
LoadingText.defaultProps = {
  title: "",
  colorText: "#fff",
};
export default LoadingText;
