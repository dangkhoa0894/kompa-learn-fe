import styled from "styled-components";
import media from "SRC/styles/media";
import { Row } from "antd";

export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 540px;
  background: no-repeat center bottom;
  background-size: cover;
  padding-top: 35px;
  /* background-image: url('https://pcdn.piiojs.com/i/kqctmw/vw,1920,vh,0,kc,1,r,0,pr,1,wp,1/https%3A%2F%2Fmonkeylearn.com.%2Fstatic%2Fimg%2Fbg-hero-new.png'); */
  background: rgb(35, 3, 64);
  background: linear-gradient(
    45deg,
    rgba(35, 3, 64, 1) 0%,
    rgba(147, 58, 249, 1) 100%
  );
  border-bottom-right-radius: 35px;
  border-bottom-left-radius: 35px;
`;

export const RowBanner = styled(Row)`
  width: 100%;
  display: flex;
  flex: 1;
  .title-banner,
  .image-banner {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 22px 50px;
    img {
      border-radius: 10px;
      box-shadow: 20px 14px 20px 7px #6125a5;
      transform: rotateX(16deg) rotateZ(0deg) skewX(-9deg);
    }
  }

  .color-title {
    color: ${({ theme: { colors } }) => colors.white.white_1};
    padding-bottom: 20px;
  }

  ${media.lg`
    width: 1200px;
`}
`;
