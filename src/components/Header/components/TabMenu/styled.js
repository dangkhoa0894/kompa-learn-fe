import { Tabs } from 'antd';
import styled from 'styled-components';

export const CustomTabs = styled(Tabs)`
  font-weight: bold;
  .link-item {
    color: #000;
  }
  .ant-tabs-ink-bar {
    height: 5px !important;
  }
  .ant-tabs-nav {
    height: 100%;
    :before {
      border-bottom: unset;
      background: red;
    }
    .ant-tabs-nav-operations {
      display: none;
    }
    .ant-tabs-nav-container {
      height: 100%;
      .ant-tabs-nav-wrap {
        height: 100%;
        .ant-tabs-nav-scroll {
          height: 100%;
          .ant-tabs-nav {
            height: 100%;
            /* prettier-ignore */
            >div:first-child {
              height: 100%;
              display: flex;
              align-items: center;
              .ant-tabs-tab {
                height: fit-content;
              }
            }
          }
        }
      }
    }
  }
`;
