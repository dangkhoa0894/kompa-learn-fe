import styled from "styled-components";
import { Row, Col } from "antd";
import media from "SRC/styles/media";

export const Container = styled(Row)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableTrainData = styled(Row)`
  border-radius: 10px;
  height: 100%;
  box-shadow: ${({ theme: { colors } }) => colors.gray.gray_2};
  background-color: ${({ theme: { colors } }) => colors.white.white_1};
`;

export const ColContent = styled(Col)`
  padding: 30px 10px 0px 20px;
  display: flex;
  flex-direction: column;
  ::after {
    content: "";
    position: absolute;
    top: unset;
    width: 90%;
    height: 2px;
    margin-top: unset;
    bottom: 0px;
    margin-right: 5%;
    background: ${({ theme: { colors } }) => colors.gray.gray_1};
    ${media.sm`
        margin-right: 0px;
        height: 400px;
        bottom: unset;
        right: 0;
        top: 50%;
        width: 1px;
        margin-top: -200px;
    `}
  }
  height: 500px;
  ${media.sm`
  height:auto;
    `}
`;

export const ContainerTable = styled.div`
  padding: 0px 10px 10px;
  width: 100%;
  ${media.lg`
    width: ${(props) => (props.isComponent ? "100%" : "1200px")};
    height: 500px;
    `}
`;

export const Content = styled.div`
  display: flex;
  height: 380px;
  overflow: auto;
`;

export const Action = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  padding: 0px 10px;
  ${media.lg`
  padding: 0px 30px;
    `}
`;

export const PrevButton = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  .title {
    padding-left: 13px;
    padding-top: 2px;
  }
  :hover {
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    .title {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
      text-decoration: underline;
    }
  }
`;

export const NextButton = styled.div`
  cursor: pointer;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  .title {
    padding-right: 13px;
    padding-top: 2px;
  }
  :hover {
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    .title {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
      text-decoration: underline;
    }
  }
`;

export const SkipButton = styled.div`
  cursor: pointer;
  :hover {
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    text-decoration: underline;
  }
`;
export const ColTags = styled(Col)`
  display: flex;
  flex-direction: column;
  padding: 10px 10px 0px 20px;
  height: 500px;
  ${media.sm`
    height:auto;
    `}
`;

export const TagsHeader = styled.div`
  display: flex;
  height: 35px;
  justify-content: space-between;
  align-items: center;
`;

export const ContentTags = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: ${(props) => (props.isButton ? "345px" : "340px")};
  input {
    border-radius: 20px;
  }
`;

export const TagItemContent = styled.div`
  display: flex;
  width: fit-content;
  background: ${(props) => props.isModify && "#f3f6ff"};
  border-radius: 5px;
  margin: 4px 0px;
  label {
    display: flex;
    align-items: center;
    padding: 5px 10px;
  }
  span {
    cursor: pointer;
  }
`;

/* Progress bar */
export const ContainerProgress = styled(Row)`
  width: 100%;
  padding: 10px;
  .content-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
  }
`;
export const ContentProgress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const positive = "#37B34A";
const negative = "#DD4A45";

export const ContainSentiment = styled.div`
  display: flex;
  flex-direction: column;

  .root-sentiment {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;

    .contain-sentiment {
      /* padding: 10px 0px; */
      padding-top: 5px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &.positive {
        .title {
          color: ${positive};
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          background: ${positive};
          border-color: ${positive};
          :hover {
            border-color: ${positive};
          }
        }
        .ant-checkbox-checked::after {
          border-color: ${positive};
        }
      }

      &.negative {
        .title {
          color: ${negative};
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          background: ${negative};
          border-color: ${negative};
          :hover {
            border-color: ${negative};
          }
        }
        .ant-checkbox-checked::after {
          border-color: ${negative};
        }
      }
      .title {
        padding-left: 10px;
        text-transform: capitalize;
      }
    }
  }
`;

export const DuplicateContent = styled.div`
  width: 100%;
  height: 25px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
