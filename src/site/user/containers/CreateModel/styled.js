import styled, { css } from "styled-components";
import { Row } from "antd";
import media from "SRC/styles/media";

export const WrapperCreateModel = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  .root {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px 10px;
    .title {
      text-align: center;
      padding-bottom: 40px;
      font-style: normal;
      font-weight: bold;
    }

    input,
    textarea {
      border-radius: 6px;
      border: 2px solid ${({ theme: { colors } }) => colors.gray.gray_2};
      resize: none;
      &.model-name {
        width: 65%;
      }
    }
  }
  ${media.xs`
  .root{
    width: 600px;
    padding:0px;
  }

	`}
`;

export const ContainerItem = styled.div`
  width: 100%;
  .title-template {
    color: #8181a5;
    font-style: normal;
    font-weight: normal;
  }
  .content {
    padding: 0px 10px;
    margin-top: 8px;
  }
`;

export const RowClassification = styled(Row)`
  display: flex;
`;

export const ContainItem = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  img {
    border-radius: 5px;
    border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_3};
    transition: all 0.2s;
    max-width: 400px;
    transition: all 0.2s;
  }

  .title-item {
    text-align: center;
    padding-top: 15px;
    font-style: normal;
    font-weight: 500;
  }

  :hover {
    img {
      border: 1px solid ${({ theme: { colors } }) => colors.blue.blue_2};
    }
    .title-item {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
  ${({ active }) =>
    active &&
    css`
      img {
        border: 2px solid #00aeef !important;
      }
      .title-item {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
        font-style: normal;
        font-weight: bold;
      }
    `}

  ${media.xs`
    img{
        height: ${({ mode }) => (mode === "type-data" ? "165px" : "90px")};
        width: ${({ mode }) => (mode === "type-data" ? "230px" : "unset")};
    }
  `}
`;

export const GroupButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
