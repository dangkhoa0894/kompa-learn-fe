import React from "react";
import GaugeChart from "react-gauge-chart";
import { Typography } from "antd";
import { ContainGaugeChart } from "./styled";

const GaugeChartView = (props) => {
  let options = { ...props };
  const changePercent = (value) => {
    let c = 100 - parseFloat(value);
    return [value / 100, c / 100];
  };

  options.arcsLength = changePercent(props.percent);
  options.percent = changePercent(props.percent)[0];
  return (
    <ContainGaugeChart>
      <GaugeChart {...options} />
      <Typography.Text>{props.title}</Typography.Text>
    </ContainGaugeChart>
  );
};
GaugeChartView.defaultProps = {
  nrOfLevels: 2,
  colors: ["#F49023", "#ececec"],
  arcPadding: 0.02,
  id: "gauge-chart1",
  textColor: "#bfbfbf",
  arcWidth: 0.3,
  animDelay: 0,
  percent: 23,
  cornerRadius: 1,
  title: "",
};
export default GaugeChartView;
