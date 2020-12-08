import PropTypes from "prop-types";
import React from "react";
import { Row, Col } from "antd";
import { MainButton } from "SRC/styles/mainStyled";
import { ContainerBlock, TitleHeader, ContentBody } from "./styled";
import LoadingText from "../LoadingText";

const FormView = (props) => {
  const {
    loading,
    title,
    textButton,
    width,
    disableButton,
    onSubmit,
    children,
  } = props;
  return (
    <ContainerBlock>
      <TitleHeader>{title}</TitleHeader>
      <ContentBody>
        {children}
        <Row align="center" justify="end" className="row-content">
          <Col
            xs={{ span: 12 }}
            sm={{ span: 9 }}
            md={{ span: 6 }}
            className="button-group"
          >
            {textButton && (
              <MainButton
                type="primary"
                width={width}
                disabled={disableButton}
                onClick={() => !loading && onSubmit()}
              >
                {loading ? <LoadingText title="Loading" /> : textButton}
              </MainButton>
            )}
          </Col>
        </Row>
      </ContentBody>
    </ContainerBlock>
  );
};

FormView.propTypes = {
  children: PropTypes.any,
  disableButton: PropTypes.bool,
  loading: PropTypes.bool,
  onSubmit: PropTypes.func,
  textButton: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
};
FormView.defaultProps = {
  onSubmit: () => {},
  title: "",
  textButton: "",
  width: "",
  disableButton: false,
  loading: false,
};
export default FormView;
