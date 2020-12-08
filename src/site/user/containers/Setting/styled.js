import styled from "styled-components";
import { Col } from "antd";
import media from "SRC/styles/media";

export const ContainerBlock = styled.div`
  width: 100%;
  /* background: ${({ theme: { colors } }) => colors.white.white_1};
  border-radius: 10px;
  margin-top: 50px;
  box-shadow: 0 2px 4px 0 rgba(6, 21, 33, 0.04), 0 0 2px 0 rgba(16, 25, 32, 0.03);
  padding: 20px 10px;
  ${media.md`
  padding:0px;
  padding-bottom: 10px;
    `}; */
`;
export const ColLabel = styled(Col)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px 0px;
  font-weight: 600;
  margin-top: 5px;
  ${media.sm`
    padding:0px;
    justify-content: flex-end;
    `}
`;

export const TitleHeader = styled.div`
  width: 100%;
  width: 100%;
  padding: 15px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
`;

export const ContentBody = styled.div`
  width: 100%;
  padding-top: 20px;
  .row-content {
    padding: 10px 20px;
    .input {
      border-radius: 10px;

      &.number {
        .ant-input-number-handler-wrap {
          display: none;
        }
      }
    }
    textarea {
      height: 100% !important;
      border-radius: 10px;
      resize: none;
    }
    .select-option {
      width: 100%;
      > div {
        border-radius: 10px;
      }
    }
  }
`;
export const ColInput = styled(Col)`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  button {
    margin: 10px 0px;
  }
  ${media.sm`
  padding-left:10px;
    `}
`;
//= ===============================================================
export const WrapperSetting = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  width: 100%;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center;
  padding: 30px 0px;
  overflow: auto; */
`;
