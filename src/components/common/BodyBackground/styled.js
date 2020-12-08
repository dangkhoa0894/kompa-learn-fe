import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperBodyBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  background: ${({ theme: { colors } }) => colors.gray.gray_10};
  .body-background-content {
    padding: 20px;
    width: 100%;
    background: ${({ theme: { colors } }) => colors.white.white_1};
    flex: 1;
    flex-direction: column;
    display: flex;
    ${media.lg`
        width:1140px;
        margin: 30px 15px 0px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
`}
  }
`;
