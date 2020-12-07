import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';
import { ProgressBarContainer } from './styled';

function ModuleView(props) {
  const { height, strokeColor, percent, trailColor } = props;
  return (
    <ProgressBarContainer height={height}>
      <Progress
        strokeColor={strokeColor}
        percent={percent}
        status="active"
        strokeLinecap="square"
        size="small"
        trailColor={trailColor}
        showInfo={false}
      />
    </ProgressBarContainer>
  );
}
ModuleView.propTypes = {
  percent: PropTypes.number,
  strokeColor: PropTypes.string,
  height: PropTypes.string,
  trailColor: PropTypes.string,
};
ModuleView.defaultProps = {
  percent: 50,
  strokeColor: '#2193b0 ',
  trailColor: '#becfff',
  height: '7px',
};
export default ModuleView;
