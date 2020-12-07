import styled from 'styled-components';

export const WrapperViewData = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: auto;
  background: ${({ theme: { colors } }) => colors.gray.gray_10};
  position: relative;
  top: 0;
  left: 0;
  scroll-behavior: smooth;
`;
