import PropTypes from 'prop-types';
import React from 'react';
import { AccuracyCss } from './styled';

const CalculatorAccuracy = (props) => {
  const { data } = props;
  let acc = 0;
  let className = 'default';
  if (data.length > 1) {
    acc = ((data[0].accuracy - data[1].accuracy) * 100).toFixed(2);
  }
  if (acc < 0) {
    className = 'down';
  } else if (acc > 0) {
    className = 'up';
    acc = `+ ${acc}`;
  }
  return (
    <AccuracyCss>
      <div className={`accuracy ${className}`}> {data[1] ? `${acc}%` : ''}</div>
    </AccuracyCss>
  );
};

CalculatorAccuracy.propTypes = {
  data: PropTypes.instanceOf(Object),
};

CalculatorAccuracy.defaultProps = {
  data: {},
};

export default CalculatorAccuracy;
