import styled from 'styled-components';

const FONT_SIZE = '0.7rem';
const PADDING_TAG = '6px';
export const SingleLabelCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 5px 5px 0px;
  //SENTIMENT TAG - START
  .sentiment {
    border-radius: 5px;
    border: 1px solid gray;
    display: flex;
    align-items: center;
    font-size: ${FONT_SIZE};

    .single-label {
      padding: ${PADDING_TAG};
      font-style: normal;
      font-weight: 500;
      font-size: inherit;
    }
    .single-confidence {
      font-style: normal;
      font-weight: 500;
      padding: ${PADDING_TAG};
      font-size: inherit;
    }
    &.neutral {
      border-color: ${({ theme: { colors } }) => colors.neutral.border};
      .single-label {
        border-right: ${({ viewConfidence }) =>
          viewConfidence
            ? `1px solid  ${({ theme: { colors } }) => colors.neutral.border};`
            : 'unset'};
      }
      .single-confidence {
        color: ${({ theme: { colors } }) => colors.neutral.default};
      }
      svg {
        margin-left: ${PADDING_TAG};
        color: ${({ theme: { colors } }) => colors.neutral.default};
      }
    }

    &.positive {
      border-color: ${({ theme: { colors } }) => colors.positive.border};
      .single-label {
        border-right: ${({ viewConfidence, theme: { colors } }) =>
          viewConfidence ? `1px solid ${colors.positive.border}` : 'unset'};
      }
      .single-confidence {
        color: ${({ theme: { colors } }) => colors.positive.default};
      }
      svg {
        margin-left: ${PADDING_TAG};
        color: ${({ theme: { colors } }) => colors.positive.default};
      }
    }

    &.negative {
      border-color: ${({ theme: { colors } }) => colors.negative.border};
      .single-label {
        border-right: ${({ viewConfidence, theme: { colors } }) =>
          viewConfidence ? `1px solid ${colors.negative.border}` : 'unset'};
      }
      .single-confidence {
        color: ${({ theme: { colors } }) => colors.negative.default};
      }
      svg {
        margin-left: ${PADDING_TAG};
        color: ${({ theme: { colors } }) => colors.negative.default};
      }
    }
  }
  //SENTIMENT TAG - END
  //LABEL TAG - START
  .label {
    border-radius: 5px;
    display: flex;
    align-items: center;
    height: 100%;
    font-size: ${FONT_SIZE};

    &.highlight {
      background: ${({ theme: { colors } }) => colors.blue.blue_1};
      .single-label {
        color: ${({ theme: { colors } }) => colors.white.white_1};
        border: ${({ viewConfidence, theme: { colors } }) =>
          viewConfidence ? `1px solid ${colors.gray.gray_1}` : 'unset'};
      }
      .single-confidence {
        background: ${({ theme: { colors } }) => colors.white.white_1};
        border: ${({ viewConfidence, theme: { colors } }) =>
          viewConfidence ? `1px solid ${colors.gray.gray_1}` : 'unset'};
        border-left: unset;
      }
    }
    .single-label {
      font-style: normal;
      font-weight: 500;
      font-size: inherit;
      padding: ${PADDING_TAG};
      border: 1px solid ${({ theme: { colors } }) => colors.blue.blue_1};
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      /* border-right: ${({ viewConfidence, theme: { colors } }) =>
        viewConfidence ? `1px solid ${colors.blue.blue_1}` : 'unset'}; */
    }
    .single-confidence {
      border: 1px solid ${({ theme: { colors } }) => colors.blue.blue_1};
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-left: unset;
      font-style: normal;
      font-size: inherit;
      font-weight: 500;
      padding: ${PADDING_TAG};
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  //LABEL TAG - END
`;
