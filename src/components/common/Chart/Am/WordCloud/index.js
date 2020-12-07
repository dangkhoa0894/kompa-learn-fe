import PropTypes from 'prop-types';
import React, { useLayoutEffect } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
// eslint-disable-next-line camelcase
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import * as am4plugins_wordCloud from '@amcharts/amcharts4/plugins/wordCloud';
import { WordCloudCss } from './styled';

const listColor = ['#2d3b53', '#2793ff', '#00d2ff', '#3a5e8a', '#98c8ff'];
const tempData = [
  {
    text: 'review',
    value: 24,
  },
  {
    text: 'call',
    value: 38,
  },
  {
    text: 'doctor',
    value: 70,
  },
  {
    text: 'asked',
    value: 26,
  },
  {
    text: 'finally',
    value: 14,
  },
  {
    text: 'month',
    value: 22,
  },
  {
    text: 'again',
    value: 35,
  },
  {
    text: 'review',
    value: 24,
  },
  {
    text: 'call',
    value: 38,
  },
  {
    text: 'doctor',
    value: 70,
  },
  {
    text: 'asked',
    value: 26,
  },
  {
    text: 'finally',
    value: 14,
  },
  {
    text: 'told',
    value: 64,
  },
  {
    text: 'mistake',
    value: 11,
  },
  {
    text: 'thought',
    value: 16,
  },
  {
    text: 'bad',
    value: 17,
  },
  {
    text: 'correct',
    value: 10,
  },
  {
    text: 'day',
    value: 54,
  },
  {
    text: 'prescription',
    value: 12,
  },
  {
    text: 'time',
    value: 77,
  },
  {
    text: 'thing',
    value: 45,
  },
  {
    text: 'left',
    value: 19,
  },
  {
    text: 'pay',
    value: 13,
  },
  {
    text: 'people',
    value: 32,
  },
  {
    text: 'month',
    value: 22,
  },
  {
    text: 'again',
    value: 35,
  },
  {
    text: 'review',
    value: 24,
  },
  {
    text: 'call',
    value: 38,
  },
  {
    text: 'doctor',
    value: 70,
  },
  {
    text: 'asked',
    value: 26,
  },
  {
    text: 'finally',
    value: 14,
  },
  {
    text: 'month',
    value: 22,
  },
  {
    text: 'again',
    value: 35,
  },
  {
    text: 'review',
    value: 24,
  },
  {
    text: 'call',
    value: 38,
  },
  {
    text: 'doctor',
    value: 70,
  },
  {
    text: 'asked',
    value: 26,
  },
  {
    text: 'finally',
    value: 14,
  },
];
const WordCloudChart = (props) => {
  const { data } = props;

  useLayoutEffect(() => {
    const chart = am4core.create('am-chart-word-cloud', am4plugins_wordCloud.WordCloud);
    if (data?.wordcloud) {
      const tempWordCloud = JSON.parse(data.wordcloud);
      am4core.useTheme(am4themes_animated);
      const series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

      series.data = tempWordCloud;
      series.dataFields.word = 'word';
      series.dataFields.value = 'weight';
      series.randomness = 0;
      series.colors = new am4core.ColorSet();
      series.colors.passOptions = {};
      series.labels.template.tooltipText = '{word}: {value}';
      series.fontFamily = 'Courier New';

      series.accuracy = 4;
      series.step = 15;
      series.rotationThreshold = 0.7;
      // series.maxCount = 200;
      // series.minWordLength = 2;

      series.colors = new am4core.ColorSet();
      series.colors.passOptions = {}; // makes it loop

      // series.labelsContainer.rotation = 45;
      //   series.angles = [0, -90];
      series.fontSize = 35;
      series.fontWeight = '800';

      series.colors.list = tempData.map(() =>
        am4core.color(listColor[Math.floor(Math.random() * 4)]),
      );
    }

    return () => {
      chart.dispose();
    };
    // series.labels.template.propertyFields.fill = 'color';
  }, [data]);
  return (
    <WordCloudCss>
      <div id="am-chart-word-cloud" />
    </WordCloudCss>
  );
};

WordCloudChart.propTypes = {
  data: PropTypes.instanceOf(Object),
};

WordCloudChart.defaultProps = {
  data: {},
};

export default WordCloudChart;
