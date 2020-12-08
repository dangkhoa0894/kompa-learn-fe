import { Col, Typography } from "antd";
import InfoModel from "SRC/components/InfoModel";
import { useGetDetailModel } from "SRC/hooks/Model";
import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import { RowContent, WrapperAnalysis } from "./styled";
import ChartTags from "./components/ChartTags";
import MetricsChart from "./components/MetricsChart";
import PredictView from "./components/Predict";
import WordCloudDetailModel from "./components/WordCloud";

const AnalysisModel = () => {
  const { modelId } = useParams();
  const [{ data: dataModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });
  const dataMemo = useMemo(() => dataModel, [dataModel]);

  return (
    <WrapperAnalysis>
      <div className="title">
        <Typography.Title level={3}>{dataModel.modelName}</Typography.Title>
      </div>
      <RowContent>
        <Col
          xl={{ span: 7 }}
          xs={{ span: 24 }}
          md={{ span: 12 }}
          className="col-first"
        >
          <InfoModel dataModel={dataMemo} />
        </Col>
        <Col xl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <ChartTags dataModel={dataMemo} />
        </Col>
        <Col xl={{ span: 10 }} xs={{ span: 24 }}>
          <MetricsChart dataModel={dataMemo} />
        </Col>
      </RowContent>
      <RowContent>
        <Col xl={{ span: 14 }} xs={{ span: 24 }}>
          <WordCloudDetailModel dataModel={dataMemo} />
        </Col>
        <Col xl={{ span: 10 }} xs={{ span: 24 }}>
          <PredictView dataModel={dataMemo} />
        </Col>
      </RowContent>
    </WrapperAnalysis>
  );
};

export default AnalysisModel;
