import PropTypes from 'prop-types';
import React from 'react';
import { WrapperBodyBackground } from './styled';

const BodyBackground = (props) => {
  const { children } = props;
  return (
    <WrapperBodyBackground>
      <div className="body-background-content">{children}</div>
    </WrapperBodyBackground>
  );
};

BodyBackground.propTypes = {
  children: PropTypes.instanceOf(Object),
};
BodyBackground.defaultProps = {
  children: {},
};

export default BodyBackground;
