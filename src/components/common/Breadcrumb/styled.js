import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { URL } from "SRC/resource/string";

export const LinkLogo = styled(NavLink)`
  background-image: url(${URL.LOGO_COMPANY});
  background-size: contain;
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
`;

export const ContainerBreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  .separator {
    padding: 0px 10px;
    display: flex;
  }

  .link-to {
    text-transform: capitalize;
    :hover {
      &.hover {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
      }
    }
  }
`;

export const BreadcrumbContent = styled.div`
  font-weight: 600;
  padding-left: 10px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
`;
