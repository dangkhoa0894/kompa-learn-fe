import styled from 'styled-components';

export const WrapperMetricsChart = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;

  .header-analysis-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-style: normal;
    font-weight: bold;

    h3 {
      font-style: normal;
      font-weight: bold;
    }
    .header-view-all {
      cursor: pointer;
    }
  }

  .analysis-tag {
    flex: 1;
    display: flex;
    justify-content: center;
    padding-top: 15px;
  }
`;
