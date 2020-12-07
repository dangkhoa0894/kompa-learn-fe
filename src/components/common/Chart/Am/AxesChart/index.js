import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
// eslint-disable-next-line
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { AxesChartCss } from './styled';

const AxesChartView = (props) => {
  const { dataModel } = props;
  am4core.useTheme(am4themes_animated);
  const refChart = useRef(null);

  function createSeries(chart, field, name, zIndex, color) {
    const series = chart.series.push(new am4charts.LineSeries());

    series.dataFields.valueY = field;
    series.dataFields.categoryX = 'epochs';
    series.name = name;
    series.tooltipText = 'Place taken by {name} in Epochs {categoryX}: {valueY}';
    // series.strokeWidth = 2;
    series.zIndex = zIndex;
    series.stroke = am4core.color(color);
    series.fill = am4core.color(color);
    series.strokeWidth = 2;
    const bullet = series.bullets.push(new am4charts.CircleBullet());
    bullet.circle.stroke = am4core.color('#fff');

    series.events.once('ready', function (ev) {
      chart.legend.children.moveValue(ev.target.legendDataItem.itemContainer, ev.target.zIndex);
    });

    return series;
  }

  useLayoutEffect(() => {
    if (dataModel?.score?.length > 0) {
      const { trainAcc, trainLoss, valAcc, valLoss, epochs } = dataModel?.score?.[0];
      const tempTrainAcc = JSON.parse(trainAcc);
      const tempTrainLoss = JSON.parse(trainLoss);
      const tempValAcc = JSON.parse(valAcc);
      const tempValLoss = JSON.parse(valLoss);

      const tempData1 = Array.from({ length: epochs }).map((_, index) => {
        return {
          epochs: index + 1,
          trainAcc: (tempTrainAcc[index] || 1).toFixed(3),
          trainLoss: (tempTrainLoss[index] || 0).toFixed(3),
          valLoss: (tempValLoss[index] || 0).toFixed(3),
          valAcc: (tempValAcc[index] || 1).toFixed(3),
        };
      });
      const chart = am4core.create('chart-axes', am4charts.XYChart);

      // Add data
      chart.data = tempData1;
      chart.padding(40, 0, 0, 0);
      // Create category axis

      const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = 'epochs';
      chart.yAxes.push(new am4charts.ValueAxis());

      // Create series

      createSeries(chart, 'trainLoss', 'train-loss-array', 1, '#F05897');
      createSeries(chart, 'valAcc', 'val-acc-array', 3, '#3AB6CB');
      createSeries(chart, 'valLoss', 'val-loss-array', 2, '#F56E27');
      createSeries(chart, 'trainAcc', 'train-acc-array', 4, '#0072F0');

      chart.legend = new am4charts.Legend();
      chart.cursor = new am4charts.XYCursor();
      refChart.current = chart;
    }
    return () => {
      if (refChart.current) {
        refChart.current.dispose();
      }
    };
  }, [dataModel]);

  return (
    <AxesChartCss>
      <div id="chart-axes" />
    </AxesChartCss>
  );
};

AxesChartView.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

AxesChartView.defaultProps = {
  dataModel: {},
};
export default AxesChartView;
