import styled, { css } from 'styled-components';

export const BarChartCss = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  .title {
    h3 {
      text-align: center;
    }
  }
  ${({ id }) => css`
    #${id} {
      width: 100%;
      height: 100%;
    }
  `}/* #chart-bar {
    width: 100%;
    height: 100%;
  } */
`;
