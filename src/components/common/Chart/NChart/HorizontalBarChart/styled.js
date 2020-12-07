import styled from 'styled-components';

export const WrapperHorizontalBarChart = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const ItemHorizontalCss = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  .label-item {
    width: 20%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .progress-item {
    flex: 1;
    padding: 0px 5px 0px 10px;

    .process {
      width: ${({ percentNum }) => `${percentNum}%`};
      height: 10px;
      background: ${({ theme: { colors } }) => colors.blue.blue_6};
    }
  }
  .value-item {
    width: 20%;
    text-align: right;
  }
`;
