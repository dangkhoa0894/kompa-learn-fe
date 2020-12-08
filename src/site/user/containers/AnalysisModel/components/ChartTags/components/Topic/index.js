import StackedBarChart from "SRC/components/common/Chart/NChart/StackedBarChart";
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import { TopicChartCss } from "./styled";

const TopicChart = (props) => {
  const { counterLabel, isFull } = props;
  const handleDataChart = (data) => {
    if (counterLabel) {
      const tempData = Object.keys(data).map((key) => {
        return {
          name: key,
          data: {
            neutral: data[key],
          },
        };
      });
      tempData.sort((a, b) => b.data.neutral - a.data.neutral);
      return tempData;
    }
    return null;
  };

  const dataChart = useMemo(() => handleDataChart(counterLabel), [
    counterLabel,
  ]);

  return (
    <TopicChartCss>
      {counterLabel && (
        <StackedBarChart
          dataChart={isFull ? dataChart : dataChart.slice(0, 5)}
        />
      )}
    </TopicChartCss>
  );
};

export default TopicChart;

TopicChart.propTypes = {
  counterLabel: PropTypes.instanceOf(Object),
  isFull: PropTypes.bool,
};

TopicChart.defaultProps = {
  counterLabel: {},
  isFull: false,
};

// const listTemp = [
//   {
//     name: 'Room Amentities: Comfort',
//     data: {
//       neutral: 12,
//       positive: 33,
//       negative: 99,
//     },
//   },
//   {
//     name: 'Room Amentities: Cleanliness',
//     data: {
//       neutral: 122,
//       positive: 99,
//       negative: 199,
//     },
//   },
//   {
//     name: 'Room Amentities: General',
//     data: {
//       neutral: 12,
//       positive: 33,
//       negative: 99,
//     },
//   },
//   {
//     name: 'Room Amentities: Prices',
//     data: {
//       neutral: 222,
//       positive: 99,
//       negative: 14,
//     },
//   },
// ];
