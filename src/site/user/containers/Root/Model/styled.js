import styled from 'styled-components';

export const ModuleContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${({ theme: { colors } }) => colors.white.white_1};
`;
export const BodyModule = styled.div`
  flex: 1;
  display: flex;
  height: 100%;
  width: 100%;
`;
