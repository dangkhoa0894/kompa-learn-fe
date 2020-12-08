import styled from "styled-components";
import media from "SRC/styles/media";

export const ContainMenu = styled.div`
  justify-content: center;
  height: 100%;
  display: none;
  ${media.md`
  display:flex;
  `}

  .contain-menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;

    .item-menu {
      width: fit-content;
      margin-left: 10px;
      padding: 0px 20px;
      list-style-type: none;
      position: relative;
      height: 100%;
      align-items: center;
      display: flex;
      cursor: pointer;
      font-weight: bold;
      text-transform: capitalize;
      position: relative;

      .popover {
        display: flex;
        align-items: center;
      }
      span,
      strong {
        color: ${({ theme: { colors } }) => colors.white.white_1};
      }

      svg {
        color: ${({ theme: { colors } }) => colors.white.white_1};
        margin-left: 5px;
        transition: 0.2s;
      }

      :focus {
        outline: 0;
      }

      &.active {
        :after {
          width: 30px !important;
          opacity: 1;
        }
      }

      :after {
        position: absolute;
        bottom: 4px;
        left: 20px;
        height: 5px;
        opacity: 0;
        border-radius: 10px;
        width: 0px;
        content: "";
        background: ${({ theme: { colors } }) => colors.white.white_1};
        transition: 0.2s;
      }

      :hover {
        :after {
          width: 20px;
          opacity: 0.7;
        }
      }
    }
  }
`;

export const ContainItemMore = styled.div`
  padding: 10px 0px;
  .item-sub-menu {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 4px 30px;

    svg {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }

    .label-sub-menu {
      padding-left: 20px;
    }

    :hover {
      background: ${({ theme: { colors } }) => colors.blue.blue_2};
    }
  }
`;

export const LoginButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0px 20px;
  button {
    background: #6711c7;
    border: none;
    border-radius: 5px;
    padding: 0px 25px;
    height: 38px;
    box-shadow: ${({ theme: { colors } }) => colors.white.boxShadow};
    transition: 0.3s;
    span {
      font-weight: bold;
    }
    :hover {
      background: #5a2b90;
    }
  }
`;

export const ContainMenuMobile = styled.div`
  display: flex;
  svg {
    color: ${({ theme: { colors } }) => colors.white.white_1};
    font-size: 1.5rem;
  }
  ${media.md`
    display:none;
  `}
`;
