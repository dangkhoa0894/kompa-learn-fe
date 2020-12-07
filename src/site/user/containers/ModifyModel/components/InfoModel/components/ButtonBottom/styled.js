import styled from 'styled-components';

export const TryPredictContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  .btn-try,
  .btn-train {
    width: 90px;
    border-radius: 5px;
    background: ${({ theme: { colors } }) => colors.gray.gray_9};
    span {
      text-transform: uppercase;
      font-weight: 800;
    }
  }

  .btn-train {
    min-width: 100px;
    position: relative;
    top: 0;
    right: 0;
    .sum-modify-model {
      position: absolute;
      top: -13px;
      right: -13px;
      width: 26px;
      height: 26px;
      border-radius: 20px;
      font-size: 0.8rem;
      line-height: 26px;
      background: ${({ theme: { colors } }) => colors.blue.blue_2};
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;

export const ContentTrainCss = styled.div`
  .title-content-train {
    text-align: center;
  }
`;
