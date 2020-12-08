import PropTypes from "prop-types";
import React, { useRef, useLayoutEffect, memo } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// eslint-disable-next-line camelcase
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import positiveIcon from "SRC/resource/images/positiveIcon.png";
import negativeIcon from "SRC/resource/images/negativeIcon.png";
import neutralIcon from "SRC/resource/images/neutralIcon.png";
import theme from "SRC/styles/theme";
import { PieChartCss } from "./styled";

const AmPieChart = (props) => {
  const { counterLabel, isIcon, legendPosition, isCustom } = props;

  am4core.useTheme(am4themes_animated);
  const chart = useRef(null);

  // Add data

  useLayoutEffect(() => {
    const x = am4core.create("chartdiv", am4charts.PieChart);
    // x.legend = new am4charts.Legend();
    x.seriesContainer.zIndex = 3;

    const label = x.seriesContainer.createChild(am4core.Label);
    const pieSeries = x.series.push(new am4charts.PieSeries());

    // TEXT IN PIE
    const container = new am4core.Container();
    container.parent = pieSeries;
    container.horizontalCenter = "middle";
    container.verticalCenter = "middle";
    container.width = am4core.percent(40) / Math.sqrt(2);
    container.fill = "white";

    label.parent = container;
    label.text = "TOTAL: {values.value.sum}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 13;
    label.zIndex = -1;

    // label.text = '1995';
    // label.horizontalCenter = 'middle';
    // label.verticalCenter = 'middle';
    // label.fontSize = '1rem';
    // END TEXT
    pieSeries.dataFields.value = "number";
    pieSeries.dataFields.category = "tag";
    pieSeries.labels.template.text = "{tag}: {value.value}";
    // pieSeries.slices.template.stroke = am4core.color('#4a2abb');
    // pieSeries.slices.template.strokeWidth = 2;
    // pieSeries.slices.template.strokeOpacity = 0;
    pieSeries.slices.template.propertyFields.fill = "color";
    // START LABEL SLICE
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    // END LABEL SLICE
    // pieSeries.slices.template.tooltipText = '';
    // CONTROL EVENT
    // const hs = pieSeries.slices.template.states.getKey('hover');
    // hs.properties.scale = 1.1;
    // const as = pieSeries.slices.template.states.getKey('active');
    // as.properties.shiftRadius = 0.1;
    x.cursor = new am4charts.XYCursor();
    if (!isCustom) {
      x.legend = new am4charts.Legend();
      x.legend.position = legendPosition;
      x.legend.useDefaultMarker = true;
    }
    if (isIcon) {
      const { labels, valueLabels, markers } = x.legend;
      // labels.template.text = '[lighter {color}]{country}[/]';
      labels.template.fontSize = 12;
      // valueLabels.template.text = '[lighter {color}]{value.value}[/]';
      valueLabels.template.fontSize = 12;

      //   iCON
      markers.template.disposeChildren();
      const dollar = markers.template.createChild(am4core.Image);
      dollar.width = 20;
      dollar.height = 20;
      dollar.verticalCenter = "top";
      dollar.horizontalCenter = "left";
      dollar.adapter.add("href", (href, target) => {
        if (
          target.dataItem &&
          target.dataItem.dataContext &&
          target.dataItem.dataContext._dataContext
        ) {
          return target.dataItem.dataContext._dataContext.logo;
        }
        return href;
      });
    }
    // const categoryAxis = x.xAxes.push(new am4charts.CategoryAxis());
    // categoryAxis.dataFields.category = 'country';
    // categoryAxis.renderer.grid.template.location = 0;

    // const valueAxis = x.yAxes.push(new am4charts.ValueAxis());
    // valueAxis.min = 0;
    // valueAxis.renderer.minWidth = 35;

    // const series1 = x.series.push(new am4charts.ColumnSeries());
    // series1.columns.template.width = am4core.percent(80);
    // series1.columns.template.tooltipText = '{country}: {valueY.value}';
    // series1.name = '{country}';
    // series1.dataFields.categoryX = 'country';
    // series1.dataFields.valueY = 'logo';
    // series1.stacked = true;
    // series1.dummyData = {
    //   flag: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/flag_denmark.svg',
    // };

    // START CONFIG LEGEND

    // END CONFIG LEGEND
    x.innerRadius = am4core.percent(50);
    const temp = [
      {
        tag: "Positive",
        number: counterLabel?.positive || 0,
        logo: positiveIcon,
        color: am4core.color(theme.colors.positive.default),
      },
      {
        tag: "Negative",
        number: counterLabel?.negative || 0,
        logo: negativeIcon,
        color: am4core.color(theme.colors.negative.default),
      },
      {
        tag: "Neutral",
        number: counterLabel?.neutral || 0,
        logo: neutralIcon,
        color: am4core.color(theme.colors.neutral.default),
      },
    ];

    x.data = temp;
    // EVENT RESPONSIVE TEXT IN PIE
    if (isCustom) {
      const idLegend = document.getElementById("legend");
      idLegend.innerHTML = "";
      x.events.on("ready", function () {
        // populate our custom legend when chart renders
        pieSeries.dataItems.each(function (row) {
          //   const color = x.colors.getIndex(i);
          const { color } = row._dataContext;
          const percent = Math.round(row.values.value.percent * 100) / 100;
          //   const { value } = row;
          idLegend.innerHTML += `
          <div style=" color:red;
        display:flex;
        flex-direction:row;
        align-items:center;">
            <div style=" height:15px;
        width:15px;
        background:${color};
        border-radius:50px;
        margin-right:20px;">
            </div>
            <div style="display:flex;
        flex-direction:column;
        color:black;">
         
          <p style="    font-size: 1.2rem;
          transform: translateY(5px);">${percent}%</p>
          <p style="   transform: translateY(-5px);  padding-bottom: 5px;;  color:gray;">${row.category}</p>
                 </div>
          </div>
        
        </div>`;
        });
      });
    }

    x.events.on("sizechanged", function () {
      let scale = (pieSeries.pixelInnerRadius * 2) / label.bbox.width;
      if (scale > 1) {
        scale = 1;
      }
      label.scale = scale;
    });

    chart.current = x;

    return () => {
      x.dispose();
    };
  }, [counterLabel]);

  return (
    <PieChartCss isCustom={isCustom}>
      <div id="chartdiv" style={{ width: "100%", height: "100%" }} />
      <div id="legend" />
    </PieChartCss>
  );
};

AmPieChart.propTypes = {
  counterLabel: PropTypes.shape({
    negative: PropTypes.any,
    neutral: PropTypes.any,
    positive: PropTypes.any,
  }),
  isIcon: PropTypes.bool,
  legendPosition: PropTypes.string,
  isCustom: PropTypes.bool,
};

AmPieChart.defaultProps = {
  counterLabel: {},
  isIcon: true,
  legendPosition: "left",
  isCustom: false,
};

export default memo(AmPieChart);
