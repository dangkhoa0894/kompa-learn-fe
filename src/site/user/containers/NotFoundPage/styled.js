import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperHome = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  .img-page {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f7f9fb;
    img {
      height: auto;
      width: 100%;
      ${media.sm`
      width: auto;
      `}
    }
  }
`;
