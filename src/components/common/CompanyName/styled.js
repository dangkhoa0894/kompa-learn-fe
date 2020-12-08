import styled from "styled-components";
import LogoCompanyWhite from "SRC/resource/images/KompaLearn.png";
import LogoCompanyBlack from "SRC/resource/images/KompaLearn2.png";

export const ContainCompanyName = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  .logo-link {
    display: flex;
    align-items: center;
    .logo {
      background-image: ${({ color }) =>
        color === "black"
          ? `url(${LogoCompanyBlack})`
          : `url(${LogoCompanyWhite})`};
      background-size: contain;
      height: 50px;
      width: 200px;
      background-repeat: no-repeat;
      /* border-radius: 100%; */
    }
    .company-name {
      font-size: 2em;
      font-weight: 400;
      padding-left: 10px;
    }
  }
`;
