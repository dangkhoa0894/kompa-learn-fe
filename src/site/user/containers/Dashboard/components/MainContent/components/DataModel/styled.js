import styled from "styled-components";
import media from "SRC/styles/media";
// TOP CONTENT
// MODEL OF USER
export const ModelUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
  width: 100%;
  flex-grow: ${({ isMoreTemplate }) => (isMoreTemplate ? 0 : 5)};
  border-radius: 14px;
  padding-bottom: 0px;
  height: 0px;
  overflow: hidden;
  min-height: 500px;
  /* position: relative; */

  .motion {
    position: absolute;
    bottom: 0px;
    background: white;
    width: 100%;
    height: ${({ maxHeight }) => maxHeight && `${maxHeight}px`};
    height: ${({ isMoreTemplate }) => isMoreTemplate && "0px"};
    /* display: ${({ isMoreTemplate }) =>
      isMoreTemplate ? "none" : "flex"}; */
    display: flex;
    flex-direction: column;
    transition: all 0.2s;
  }

  ${media.sm`
  min-height: unset;
  `}

  .type-list-model {
    display: flex;
    flex-direction: row;
    justify-items: center;
    padding: 15px 15px 0px;
    display: ${({ isMoreTemplate }) => isMoreTemplate && "none"};

    .item-type {
      display: flex;
      align-items: center;
      background: ${({ theme: { colors } }) => colors.gray.gray_10};
      padding: 8px;
      border-radius: 5px;
      margin-right: 10px;
      cursor: pointer;

      &.active {
        background: ${({ theme: { colors } }) => colors.blue.blue_8};
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
        .label-type,
        svg {
          color: ${({ theme: { colors } }) => colors.blue.blue_1};
        }
      }

      svg {
        margin-right: 9px;
        color: ${({ theme: { colors } }) => colors.gray.gray_1};
      }
      .label-type {
        font-size: 0.7rem;
        color: ${({ theme: { colors } }) => colors.gray.gray_1};
        text-transform: uppercase;
        font-style: normal;
        font-weight: 600;
      }
    }
  }
`;
// TABLE
export const ContentTable = styled.div`
  margin-top: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  .fl {
    display: flex;
    flex-direction: column;

    &.center {
      span,
      .accuracy {
        text-align: center;
      }
    }

    &.left {
      span,
      .accuracy {
        text-align: left;
      }
    }

    &.right {
      span,
      .accuracy {
        text-align: right;
      }
    }

    &.model-name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      width: 100%;
    }
    .rt {
      color: #000;
      font-weight: bold;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }
    .sp {
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      background-color: ${({ theme: { colors } }) => colors.white.white_1};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      font-size: 0.7rem;
    }
  }

  .btn-action {
    background: #ffffff;
    padding: 10px;
    border-radius: 6px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    border: 1px solid #f1f2f7;
    justify-content: center;
    svg {
      width: 80%;
      height: 80%;
    }
  }
  .btn-action-remove {
    background: #ffffff;
    border-radius: 6px;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    border: 1px solid #f1f2f7;
    justify-content: center;
    :hover {
      background-color: ${({ theme: { colors } }) => colors.red.red_1};
      svg {
        color: white;
      }
    }
    svg {
      color: ${({ theme: { colors } }) => colors.red.red_1};
      width: auto;
      height: 20px;
    }
  }
  .group-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .icon-model {
      background: ${({ theme: { colors } }) => colors.gray.gray_10};
      border-radius: 6px;
      height: 45px;
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: auto;
        width: 25px;
      }
    }
    .sentiment {
      color: #ff163f;
    }
    .multiple {
      color: #3f9ebe;
    }
    .topic {
      color: #096dd9;
    }
  }
`;
// EMPTy DATA
