import styled from 'styled-components';

export const WrapperBtnMenu = styled.div`
  background: #f0f0f5;
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    width: auto;
    height: 20px;
  }
  /* Icon 4 */
`;
