import PropTypes from "prop-types";
import React, { useLayoutEffect, useRef } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Typography } from "antd";
import theme from "SRC/styles/theme";
import { BarChartCss } from "./styled";

const BarChart = (props) => {
  const { dataChart, showTitle, id, isFixScale, maxLimit, isShowGrid } = props;
  am4core.useTheme(am4themes_animated);
  const chart = useRef(null);
  useLayoutEffect(() => {
    const chartCus = am4core.create(id, am4charts.XYChart);
    // chartCus.padding(40, 40, 40, 40);
    chartCus.paddingRight = 40;
    const categoryAxis = chartCus.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "category";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 1;
    // categoryAxis.renderer.grid.template.disabled = true;
    const valueAxis = chartCus.xAxes.push(new am4charts.ValueAxis());
    valueAxis.extraMax = 0.5;
    if (!isShowGrid) {
      valueAxis.renderer.grid.template.strokeWidth = 0;
      categoryAxis.renderer.grid.template.strokeWidth = 0;
    }

    const series = chartCus.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "num";
    series.dataFields.categoryY = "category";
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.fill = am4core.color(theme.colors.blue.blue_6);

    const valueLabel = series.bullets.push(new am4charts.LabelBullet());
    valueLabel.label.text = "{num}";
    valueLabel.label.horizontalCenter = "left";
    valueLabel.label.dx = 10;
    valueLabel.label.truncate = false;
    valueLabel.label.hideOversized = false;
    valueLabel.valign = "middle";
    valueLabel.label.fontSize = 13;
    chartCus.data = dataChart;

    if (isFixScale) {
      valueLabel.label.horizontalCenter = "right";
      //   valueAxis.renderer.labels.template.disabled = true;
      valueLabel.label.fill = am4core.color("white");
      valueLabel.label.dx = -10;
      chartCus.maxZoomLevel = 0;
      chartCus.seriesContainer.draggable = false;
      chartCus.seriesContainer.resizable = false;
      valueAxis.calculateTotals = true;
      valueAxis.min = 0;
      valueAxis.max = maxLimit;
      valueAxis.maximum = maxLimit;
      valueAxis.strictMinMax = true;
      chartCus.zoomOutButton.disabled = true;
    }
    chart.current = chartCus;
    return () => {
      chartCus.dispose();
    };
  }, []);

  return (
    <BarChartCss id={id}>
      {showTitle && (
        <div className="title">
          <Typography.Title level={3}>Analysis Tag</Typography.Title>
        </div>
      )}
      <div id={id} />
    </BarChartCss>
  );
};

BarChart.propTypes = {
  dataChart: PropTypes.instanceOf(Array),
  showTitle: PropTypes.bool,
  id: PropTypes.string.isRequired,
  isFixScale: PropTypes.bool,
  maxLimit: PropTypes.number,
  isShowGrid: PropTypes.bool,
};

BarChart.defaultProps = {
  dataChart: [],
  showTitle: true,
  isFixScale: false,
  maxLimit: 1,
  isShowGrid: true,
};

export default BarChart;
