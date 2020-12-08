import styled from "styled-components";
import media from "SRC/styles/media";

const withDesktop = "1200px";
export const WrapperBodyHome = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  height: max-content;
  /* overflow: hidden; */
`;
export const Container1 = styled.div`
  width: 100%;
  padding: 0px 10px;
  /* display: flex;
  flex-direction: column; */

  ${media.lg`
  width:${withDesktop}
  
  `}
`;

export const Container2 = styled.div`
  padding: 0px 10px;
  background-color: #f5f7fa;
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  > div {
    width: 100%;
    ${media.lg`
  width:${withDesktop}
  `}
  }
`;
