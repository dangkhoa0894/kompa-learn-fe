import PropTypes from "prop-types";
import React from "react";
import { LoadingContainer } from "./styled";

function Loading(props) {
  const { mode } = props;
  return (
    <LoadingContainer mode={mode}>
      <div className="loader">
        <div className="inner one" />
        <div className="inner two" />
        <div className="inner three" />
      </div>
    </LoadingContainer>
  );
}

Loading.propTypes = {
  mode: PropTypes.string,
};
Loading.defaultProps = {
  mode: "page",
};
export default Loading;
