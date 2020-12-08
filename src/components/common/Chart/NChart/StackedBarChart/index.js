import { Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";
import theme from "SRC/styles/theme";
import PropTypes from "prop-types";
import { WrapperStackedBar, StackedBarContainer } from "./styled";

const StackedBarChart = (props) => {
  const { dataChart } = props;
  const [maxNumber, setMaxNumber] = useState(0);

  useEffect(() => {
    let max = 0;
    dataChart.forEach((item) => {
      // eslint-disable-next-line no-return-assign
      const tempMax = Object.values(item.data).reduce(
        (sum, currentSum) => (sum += currentSum)
      );
      if (tempMax > max) {
        max = tempMax;
      }
    });
    setMaxNumber(max);
  }, []);

  return (
    <WrapperStackedBar>
      {dataChart.map((item) => {
        return (
          <div key={item.name} className="stacked-item">
            <Typography.Text className="stacked-title">
              {item.name}
            </Typography.Text>
            <StackedBar data={item.data} name={item.name} maxSum={maxNumber} />
          </div>
        );
      })}
    </WrapperStackedBar>
  );
};

export default StackedBarChart;

StackedBarChart.propTypes = {
  dataChart: PropTypes.instanceOf(Array),
};

StackedBarChart.defaultProps = {
  dataChart: [],
};

const StackedBar = (props) => {
  const { data, maxSum, name } = props;
  const [dataChart, setDataChart] = useState({});

  useEffect(() => {
    const a = setTimeout(() => {
      setDataChart(data);
    }, 0);
    return () => {
      clearTimeout(a);
    };
  }, [data]);

  const sum = dataChart.neutral
    ? // eslint-disable-next-line no-return-assign
      Object.values(dataChart).reduce((s, currentSum) => (s += currentSum))
    : 0;
  return (
    <StackedBarContainer
      maxSum={maxSum}
      neutral={dataChart.neutral}
      negative={dataChart.negative}
      positive={dataChart.positive}
    >
      <Tooltip
        title={`${name} : ${dataChart.neutral}`}
        placement="top"
        overlayClassName="custom-tooltip-border-radius"
        color={theme.colors.neutral.default}
      >
        <div className="bar neutral" />
      </Tooltip>
      <Tooltip
        title={`Negative : ${dataChart.negative}`}
        placement="topRight"
        overlayClassName="custom-tooltip-border-radius"
        color={theme.colors.negative.default}
      >
        <div className="bar negative" />
      </Tooltip>
      <Tooltip
        title={`Positive : ${dataChart.positive}`}
        placement="topRight"
        overlayClassName="custom-tooltip-border-radius"
        color={theme.colors.positive.default}
      >
        <div className="bar positive" />
      </Tooltip>
      <Tooltip
        title={`Summary : ${sum}`}
        placement="top"
        color={theme.colors.positive.default}
        overlayClassName="custom-tooltip-border-radius"
      >
        <div className="bar item-number">{sum}</div>
      </Tooltip>
    </StackedBarContainer>
  );
};

StackedBar.propTypes = {
  data: PropTypes.PropTypes.shape({
    negative: PropTypes.number,
    neutral: PropTypes.number,
    positive: PropTypes.number,
  }),
  maxSum: PropTypes.number,
  name: PropTypes.string,
};

StackedBar.defaultProps = {
  data: {
    negative: 0,
    neutral: 0,
    positive: 0,
  },
  maxSum: 0,
  name: "",
};
