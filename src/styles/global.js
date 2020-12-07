import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import THEME from './theme';
import NORMALIZE from './normalize';
import TYPOGRAPHY from './typography';
import ANTDCUSTOM from './antdStyled';

const Styles = createGlobalStyle`
  ${NORMALIZE}
  ${TYPOGRAPHY}
  ${ANTDCUSTOM}

  * {
    box-sizing: border-box;
  }

  img {
    width: 100%;
    height: auto;
  }
`;

const withGlobalStyles = (props) => {
  const { children } = props;
  return (
    <ThemeProvider theme={THEME}>
      <Styles />
      {children}
    </ThemeProvider>
  );
};

export default withGlobalStyles;
