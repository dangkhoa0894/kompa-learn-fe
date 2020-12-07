import styled from 'styled-components';

export const CounterLabelContainer = styled.div`
  height: ${({ minHeight }) => minHeight || '200px'};
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  width: 100%;
  .counter-tag {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 180px;
    font-size: 1.5rem;
    font-size: ${({ fontSizeTitle }) => `${fontSizeTitle}rem`};
    span {
      font-style: normal;
      font-weight: normal;
    }
    /* transition: transform 0.3s; */
  }

  .bar-chart-mini {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    .sort-bar-chart {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      cursor: pointer;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
    }

    .show-more-chart {
      width: 100%;
      text-align: center;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      cursor: pointer;
      :hover {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
      }
    }
  }
`;

export const BarChartCss = styled.div`
  height: ${({ totalCategories }) =>
    totalCategories * 30 + 60 < 500 ? '500px' : `${totalCategories * 30 + 60}px`};
  width: 700px;
`;
