import styled from 'styled-components';

export const ContainOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 200px;
  .option-item {
    cursor: pointer;
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;
