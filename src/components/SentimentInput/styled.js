import styled from 'styled-components';

export const ContainerSentiment = styled.div`
  display: flex;
  justify-content: ${({ spar }) => (spar === 'true' ? 'space-around' : 'space-between')};
  padding-right: 10px;
  .input-sentiment {
    display: flex;
    color: gray;
    svg {
      cursor: pointer;
      height: 17px;
      width: auto;
    }
    &.neutral {
      &.active {
        svg {
          color: ${({ theme: { colors } }) => colors.neutral.default};
        }
      }
    }
    &.positive {
      &.active {
        svg {
          color: ${({ theme: { colors } }) => colors.positive.default};
        }
      }
    }
    &.negative {
      &.active {
        svg {
          color: ${({ theme: { colors } }) => colors.negative.default};
        }
      }
    }
  }
`;
