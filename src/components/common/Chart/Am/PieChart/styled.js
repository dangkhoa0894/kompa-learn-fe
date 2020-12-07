import styled from 'styled-components';

export const PieChartCss = styled.div`
  height: 100%;
  ${({ isCustom }) =>
    isCustom &&
    ` display:flex;
      flex-direction:row;
      padding: 10px;
      align-items: center;`}
`;
