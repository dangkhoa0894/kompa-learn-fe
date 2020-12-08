/* eslint-disable react/jsx-wrap-multilines */
import PropTypes from "prop-types";
import React from "react";
import { Typography } from "antd";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { CongratulationsCss } from "./styled";

const CongratulationsPopup = (props) => {
  const { isSuccess } = props;
  return (
    <CongratulationsCss>
      <Typography.Title level={1}>Congratulations!</Typography.Title>
      <br />
      <Typography.Title level={4} className="desc">
        You have trained your model for the first time! You can test it out
        right away or keep training it in order to build accuracy up
      </Typography.Title>
      {isSuccess === 0 && <Loading mode="panel" />}
    </CongratulationsCss>
  );
};

CongratulationsPopup.propTypes = {
  isSuccess: PropTypes.number,
};
CongratulationsPopup.defaultProps = {
  isSuccess: 0,
};
export default CongratulationsPopup;
