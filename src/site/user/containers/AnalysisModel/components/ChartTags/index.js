import PropTypes from "prop-types";
import React, { useMemo } from "react";
import AnalysisTag from "SRC/components/AnalysisTag";
import { Typography } from "antd";
import AmPieChart from "SRC/components/common/Chart/Am/PieChart";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { WrapperAnalysisTag } from "./styled";

const ChartTags = (props) => {
  const {
    dataModel: { counterLabel, typeModel },
  } = props;
  const counterCache = useMemo(() => counterLabel && JSON.parse(counterLabel), [
    counterLabel,
  ]);

  const renderChart = () => {
    switch (typeModel) {
      case 1:
        return (
          <>
            <div className="header-analysis-tag">
              <Typography.Title level={3}>Topic</Typography.Title>
            </div>
            <div className="analysis-tag">
              <AnalysisTag
                dataModel={props.dataModel}
                minHeight={300}
                numberRow={6}
              />
            </div>
          </>
        );

      case 2:
        return (
          <>
            <Typography.Title level={3}>Sentiment</Typography.Title>
            <div className="analysis-tag ">
              <AmPieChart
                counterLabel={counterCache}
                isIcon={false}
                legendPosition="right"
                isCustom
              />
            </div>
          </>
        );
      case 3:
        return (
          <>
            <Typography.Title level={3}>
              Multiple Topic & Sentiment{" "}
            </Typography.Title>
            <div className="analysis-tag " />
          </>
        );
      default:
        return <Loading mode="panel" />;
    }
  };

  return <WrapperAnalysisTag>{renderChart()}</WrapperAnalysisTag>;
};

export default ChartTags;
ChartTags.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

ChartTags.defaultProps = {
  dataModel: {},
};
