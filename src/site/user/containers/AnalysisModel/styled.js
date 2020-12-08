import { Row } from "antd";
import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperAnalysis = styled.div`
  display: flex;
  flex: 1;
  /* width: 100%; */
  overflow: auto;
  flex-direction: column;
  .title {
    min-height: 60px;
    display: flex;
    align-items: center;
    padding: 00px 20px;
    h3 {
      font-style: normal;
      font-weight: bold;
    }
  }
`;

export const RowContent = styled(Row)`
  flex: 1;
  width: 100%;
  height: fit-content;
  > div {
    border-top: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  }

  ${media.sm`
  .col-first {
    border-right: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  }
  `}

  ${media.lg`
  
  border-top: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  border-bottom: unset;
  >div {
      border:unset;
    border-right: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  }
  >div:last-child {
    border-right: unset;
  }
  `}
`;
