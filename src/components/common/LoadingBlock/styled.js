import styled from 'styled-components';

export const ContainerLoading = styled.div`
  height: ${(props) => props.height}px;
  padding: 10px;
  /* border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_6}; */
  background: ${({ theme: { colors } }) => colors.white.white_1};
  border-radius: 5px;
`;
