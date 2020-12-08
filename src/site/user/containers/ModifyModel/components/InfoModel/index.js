import PropTypes from "prop-types";
import React from "react";
import { Typography } from "antd";
import { useGetDetailModel } from "SRC/hooks/Model";
import { useParams } from "react-router-dom";
import { InfoModelWrapper, TemplateCss } from "./styled";
import AnalysisTagView from "../../../../../../components/AnalysisTag";
import ModifyDataView from "./components/ModifyData";
import ButtonBottom from "./components/ButtonBottom";

const InfoModel = () => {
  const { modelId } = useParams();
  const [{ data: dataModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });

  return (
    <InfoModelWrapper>
      <div className="container-info">
        <TemplateBlock title="Analysis Tag">
          <AnalysisTagView dataModel={dataModel} fontSizeTitle={2.8} />
        </TemplateBlock>
        <TemplateBlock title="Modify Tag">
          <ModifyDataView />
        </TemplateBlock>
      </div>
      <div className="button-group">
        <ButtonBottom />
      </div>
    </InfoModelWrapper>
  );
};

export default InfoModel;

const TemplateBlock = (props) => {
  const { children, title } = props;
  return (
    <TemplateCss>
      <Typography.Title level={3} className="template-title">
        {title}
      </Typography.Title>
      <div className="template-content">{children}</div>
    </TemplateCss>
  );
};

TemplateBlock.propTypes = {
  children: PropTypes.instanceOf(Object),
  title: PropTypes.string,
};
TemplateBlock.defaultProps = {
  children: {},
  title: "",
};
