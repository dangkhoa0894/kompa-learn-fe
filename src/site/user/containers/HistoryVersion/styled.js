import { Col } from 'antd';
import styled from 'styled-components';

export const WrapperHistoryVersion = styled.div`
  .row-container-version {
    padding-top: 40px;
  }
`;

export const ItemHistoryCss = styled(Col)`
  .content-item-history {
    border: 1px solid #ececec;
    border-radius: 5px;
    padding: 10px;
    :hover {
      background: ${({ theme: { colors } }) => colors.gray.gray_5};
    }
    .header-version {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .status-active {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        border-radius: 5px;
        background-color: #e06a6a;
        cursor: pointer;

        svg {
          height: 23px;
          width: auto;
        }
        &.active {
          background-color: ${({ theme: { colors } }) => colors.blue.blue_1};
        }
      }
    }
    .divider {
      margin: 5px 0px;
    }
  }
`;

export const TemplateInfoCss = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .label-template-version {
    font-weight: 500;
  }
  .content-template-version {
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
  }
`;

export const ContentCaution = styled.div`
  padding: 10px 0px;
`;

export const LoadingCss = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;
