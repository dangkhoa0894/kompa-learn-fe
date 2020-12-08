import styled from "styled-components";
import media from "SRC/styles/media";
// TOP CONTENT
export const WrapperMainContent = styled.div`
  flex: 1;
  display: flex;
  /* background: ${({ theme: { colors } }) => colors.gray.gray_7}; */
  background: ${({ theme: { colors } }) => colors.gray.gray_10};
  padding: 0px 35px 20px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  ${media.md`
  overflow: ${({ isMoreTemplate }) => (isMoreTemplate ? "auto" : "hidden")};
`}
`;
export const BodyDashBoard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0px;
  transition: all 0.3s;
  width: 100%;

  ${media.lg`
    width: ${({ isShowDetail }) => (isShowDetail ? "100%" : "1200px")};
`}/* flex-direction: column;
  flex: 1;
  display: flex; */
`;
