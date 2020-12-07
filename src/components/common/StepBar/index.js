import PropTypes from 'prop-types';
import React from 'react';
import { Steps } from 'antd';
import { ContainerStepBar } from './styled';

const { Step } = Steps;
const StepBar = (props) => {
  const { steps, currentStep } = props;

  return (
    <ContainerStepBar>
      <Steps current={currentStep} progressDot={(dot) => dot}>
        {steps.map((item) => {
          return <Step key={item.id} title={item.title} />;
        })}
      </Steps>
      ,
    </ContainerStepBar>
  );
};

StepBar.propTypes = {
  steps: PropTypes.instanceOf(Array),
  currentStep: PropTypes.number,
};

export default StepBar;

StepBar.defaultProps = {
  steps: [],
  currentStep: 0,
};
