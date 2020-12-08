import PropTypes from "prop-types";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Typography, Row, Col } from "antd";
import BlockModel from "SRC/components/common/BlockModel";
import { GET_TEMPLATE_MODEL } from "SRC/graphql/Model/Query";
import { useQuery } from "@apollo/client";
import { ERROR_CODE } from "SRC/resource/string";
import { useHistory } from "react-router-dom";
import { ContainerTemplateModel } from "./styled";

const TemplateModel = (props) => {
  const { isMoreTemplate, openMoreTemplate } = props;
  const [templateModels, setTemplateModels] = useState([]);
  const history = useHistory();
  const { loading } = useQuery(GET_TEMPLATE_MODEL, {
    onCompleted: (rs) => {
      if (rs.getTemplateModel.statusCode === ERROR_CODE.SUCCESS) {
        setTemplateModels(rs.getTemplateModel.data || []);
      }
    },
  });
  const handleMoreModel = () => {
    openMoreTemplate();
  };

  const viewDetailLib = (dataItem) => {
    history.push(`/model/modify-data/view/${dataItem.id}`);
  };
  return (
    <ContainerTemplateModel isMoreTemplate={isMoreTemplate}>
      <div className="title-template">
        <div className="header">
          <Typography.Text className="strong">
            Start a new training Model with Template
          </Typography.Text>
        </div>
        <div
          className="strong more-model"
          onClick={handleMoreModel}
          onKeyPress={handleMoreModel}
          role="presentation"
        >
          Temple Gallery
          {isMoreTemplate ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      <div className="content-template">
        <Row gutter={[15, 15]}>
          {templateModels?.length > 0 &&
            templateModels.slice(0, 4).map((item) => {
              return (
                <Col
                  key={item.id}
                  onClick={() => viewDetailLib(item)}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 6 }}
                  className="gutter-row"
                >
                  <BlockModel loading={loading} blockType="blank" {...item} />
                </Col>
              );
            })}

          {isMoreTemplate &&
            templateModels?.length > 0 &&
            templateModels.slice(4, templateModels?.length).map((item) => {
              return (
                <Col
                  key={item.id}
                  onClick={() => viewDetailLib(item)}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 6 }}
                  className="gutter-row"
                >
                  <BlockModel
                    loading={loading}
                    blockType="blank"
                    {...item}
                    animation
                    isMoreTemplate={isMoreTemplate}
                  />
                </Col>
              );
            })}

          {/* ///=================================
           */}
          {/* {isMoreTemplate &&
            templateModels?.length > 0 &&
            templateModels
              .concat(templateModels)
              .concat(templateModels)
              .map((item) => {
                return (
                  <Col
                    key={item.id}
                    onClick={() => viewDetailLib(item)}
                    xs={{ span: 24 }}
                    md={{ span: 12 }}
                    lg={{ span: 6 }}
                    className="gutter-row"
                  >
                    <BlockModel
                      loading={loading}
                      blockType="blank"
                      {...item}
                      animation
                      isMoreTemplate={isMoreTemplate}
                    />
                  </Col>
                );
              })}
          {isMoreTemplate &&
            templateModels?.length > 0 &&
            templateModels.slice(0, templateModels?.length).map((item) => {
              return (
                <Col
                  key={item.id}
                  onClick={() => viewDetailLib(item)}
                  xs={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 6 }}
                  className="gutter-row"
                >
                  <BlockModel
                    loading={loading}
                    blockType="blank"
                    {...item}
                    animation
                    isMoreTemplate={isMoreTemplate}
                  />
                </Col>
              );
            })} */}
          {/* ================================= */}
        </Row>
      </div>
    </ContainerTemplateModel>
  );
};

TemplateModel.propTypes = {
  isMoreTemplate: PropTypes.bool,
  openMoreTemplate: PropTypes.func,
};

TemplateModel.defaultProps = {
  isMoreTemplate: false,
  openMoreTemplate: () => {},
};

export default TemplateModel;
