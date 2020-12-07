import styled, { css } from 'styled-components';

export const WrapperStackedBar = styled.div`
  .stacked-item {
    margin-bottom: 15px;
    .stacked-title {
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      padding-bottom: 5px;
      display: block;
    }
  }
`;

export const StackedBarContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  height: 20px;
  width: 100%;
  border-radius: 50px;
  overflow: hidden;

  .bar {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 20px;
    border-radius: 200px;
    transition: all 1s;
    transition-timing-function: ease-in;
    width: 0;

    &.neutral {
      z-index: 3;
      background: ${({ theme: { colors } }) => colors.neutral.default};

      ${({ neutral, maxSum }) =>
        neutral &&
        css`
          width: calc((100% - 100px) * ${neutral / maxSum});
        `}
    }

    &.positive {
      z-index: 1;
      background: ${({ theme: { colors } }) => colors.positive.default};
      ${({ positive, negative, neutral, maxSum }) =>
        neutral &&
        css`
          width: calc(
            ((100% - 100px) * ${positive / maxSum}) + ((100% - 100px) * ${negative / maxSum}) +
              ((100% - 100px) * ${neutral / maxSum})
          );
        `}
    }

    &.negative {
      z-index: 2;
      background: ${({ theme: { colors } }) => colors.negative.default};
      ${({ negative, neutral, maxSum }) =>
        neutral &&
        css`
          width: calc(
            ((100% - 100px) * ${negative || 0 / maxSum}) + ((100% - 100px) * ${neutral / maxSum})
          );
        `}
    }

    &.item-number {
      ${({ positive, negative, neutral, maxSum }) =>
        neutral &&
        css`
          left: calc(
            ((100% - 100px) * ${positive || 0 / maxSum}) +
              ((100% - 100px) * ${negative || 0 / maxSum}) + ((100% - 100px) * ${neutral / maxSum}) +
              5px
          );
          width: fit-content;
        `};
    }
  }
`;
