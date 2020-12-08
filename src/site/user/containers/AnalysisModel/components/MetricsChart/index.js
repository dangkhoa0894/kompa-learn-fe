import PropTypes from "prop-types";
import React from "react";
import { Typography } from "antd";
import AxesChartView from "SRC/components/common/Chart/Am/AxesChart";
import BarChart from "SRC/components/common/Chart/Am/BarChart";
import { WrapperMetricsChart } from "./styled";

const MetricsChart = (props) => {
  const {
    dataModel: { typeModel, score },
  } = props;
  const renderChart = () => {
    switch (typeModel) {
      case 1:
      case 2: {
        const tempScore = score?.[0];
        let dataChart = [];

        if (
          tempScore.algorithm?.coreId < 6 ||
          tempScore?.algorithm?.coreId === 10
        ) {
          dataChart = [
            {
              category: "Recall",
              num: tempScore?.recall || 0,
            },
            {
              category: "F1 score",
              num: tempScore?.f1Score || 0,
            },
            {
              category: "Validation",
              num: tempScore?.validation || 0,
            },
            {
              category: "Precision",
              num: tempScore?.precision || 0,
            },
            {
              category: "Accuracy",
              num: tempScore?.accuracy || 0,
            },
          ];
          //   dataChart.sort((a, b) => (a.category > b.category ? -1 : 1));
        }

        return (
          <>
            <div className="header-analysis-tag">
              <Typography.Title level={3}>Metrics Chart</Typography.Title>
            </div>
            <div className="analysis-tag">
              {tempScore?.algorithm?.coreId < 6 ||
              tempScore?.algorithm?.coreId === 10 ? (
                <BarChart
                  dataChart={dataChart}
                  showTitle={false}
                  id="chart_tags"
                  isFixScale
                  isShowGrid={false}
                />
              ) : (
                <AxesChartView dataModel={props.dataModel} />
              )}
            </div>
          </>
        );
      }

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
        return "";
    }
  };

  return <WrapperMetricsChart>{renderChart()}</WrapperMetricsChart>;
};

export default MetricsChart;
MetricsChart.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

MetricsChart.defaultProps = {
  dataModel: {},
};
