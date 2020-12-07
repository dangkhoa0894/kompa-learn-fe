import styled from 'styled-components';

const FONT_SIZE = '0.7rem';
const PADDING_TAG = '6px';
export const MultipleCss = styled.div`
  width: fit-content;
  .label {
    display: flex;
    align-items: center;
    width: fit-content;
    border-radius: 5px;
    margin: 0px 10px 10px 0px;
    border: 1px solid #d7d7d7;
    font-size: ${FONT_SIZE};

    .percent-label {
      padding: ${PADDING_TAG};
      font-size: inherit;
    }
    .contain-tag {
      border-right: ${({ viewConfidence }) => (viewConfidence ? '1px solid red' : 'unset')};
      padding: ${PADDING_TAG};
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 31px;
      font-size: inherit;

      &.temp {
        border-right: unset;
        svg,
        .child-label {
          color: ${({ theme: { colors } }) => colors.gray.gray_1};
          font-weight: 600;
        }
      }
    }
    .child-label {
      font-size: inherit;
    }
    .root-label {
      padding: 0px 5px;
      font-size: inherit;
    }
    &.positive {
      border-color: ${({ theme: { colors } }) => colors.positive.border};
      .contain-tag {
        border-right-color: ${({ theme: { colors } }) => colors.positive.border};
      }
      .percent-label {
        color: ${({ theme: { colors } }) => colors.positive.default};
      }
      svg,
      .child-label {
        color: ${({ theme: { colors } }) => colors.positive.default};
        font-weight: 600;
      }
    }

    &.negative {
      border-color: ${({ theme: { colors } }) => colors.negative.border};
      .contain-tag {
        border-right-color: ${({ theme: { colors } }) => colors.negative.border};
      }
      .percent-label {
        color: ${({ theme: { colors } }) => colors.negative.default};
      }
      svg,
      .child-label {
        color: ${({ theme: { colors } }) => colors.negative.default};
        font-weight: 600;
      }
    }
    &.neutral {
      border-color: ${({ theme: { colors } }) => colors.neutral.border};
      .contain-tag {
        border-right-color: ${({ theme: { colors } }) => colors.neutral.border};
      }
      .percent-label {
        color: ${({ theme: { colors } }) => colors.neutral.default};
      }
      svg,
      .child-label {
        color: ${({ theme: { colors } }) => colors.neutral.default};
        font-weight: 600;
      }
    }
  }
`;
