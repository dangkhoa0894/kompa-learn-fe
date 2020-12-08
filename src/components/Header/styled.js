import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Row } from "antd";
import media from "SRC/styles/media";
import LogoCompany from "resource/images/KompaLearn2.png";

export const LinkLogo = styled(NavLink)`
  display: flex;
  align-items: center;
  .logo {
    background-image: url(${LogoCompany});
    background-size: contain;
    height: 50px;
    width: 165px;
    background-position: center;
    background-repeat: no-repeat;
    margin-left: 10px;
  }
  .company-name {
    font-size: 2em;
    font-weight: 400;
    padding-left: 10px;
  }
`;

export const HeaderContainer = styled(Row)`
  min-height: 60px;
  padding: 0px 10px;
  cursor: pointer;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #f9f9f9;
  width: 100%;
  .menu-tablet {
    display: none;
    ${media.md`
    display:block;
           `}
  }
  .menu-mobile {
    display: flex;
    justify-content: flex-end;
    > span {
      border-radius: 6px;
      border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_1};
      padding: 10px;
    }

    ${media.md`
          display:none;
           `}
  }
  z-index: 999999;
  ${media.md`
  z-index:1
     `}
`;
