import styled from 'styled-components';

export const WrapperFilterData = styled.div`
  height: 100%;
  width: ${({ isShowFilter }) => (isShowFilter ? ' 400px' : '0px')};
  position: sticky;
  top: 0;
  right: 0;
  transition: width 0.15s;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  display: flex;
  flex-direction: column;

  .title-filter {
    padding: 20px;
    h3 {
      white-space: nowrap;
      font-weight: bold;
      font-style: normal;
    }
  }
  .content-filter {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-height: 0px;
    overflow: auto;
    padding: 0px ${({ isShowFilter }) => (isShowFilter ? ' 20px' : '0px')};

    .header-topic {
      background: white;
      position: sticky;
      top: 0px;
      z-index: 2;
      white-space: nowrap;
    }

    .item-filter {
      white-space: nowrap;
      span {
        white-space: nowrap;
      }
    }

    .ant-checkbox-group {
      display: flex;
      flex-direction: column;
      > label {
        margin: 10px 0px;
        border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
        border-radius: 5px;
        padding: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        :hover {
          border: 1px solid ${({ theme: { colors } }) => colors.blue.blue_1};
        }
      }
      span {
        white-space: nowrap;
      }
    }
  }
`;

export const CollapsePanelCss = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  transition: all 0.2s;

  .contain-collapse {
    transition: all 0.2s;
    overflow: auto;
  }
`;
