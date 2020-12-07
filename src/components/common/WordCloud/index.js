/* eslint-disable */
import React from 'react';
import ReactWordcloud from 'react-wordcloud';

const WordCloudView = (props) => {
  const { options, words } = props;
  return <ReactWordcloud options={options} words={words} />;
};
const templeWords = [
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

WordCloudView.defaultProps = {
  options: {
    colors: ['#2d3b53', '#2793ff', '#00d2ff', '#3a5e8a', '#98c8ff'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [6, 70],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  },
  words: templeWords,
};
export default WordCloudView;
