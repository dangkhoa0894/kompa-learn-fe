import { Tabs } from 'antd';
import styled from 'styled-components';

export const CustomTabs = styled(Tabs)`
  .link-item {
    color: #000;
  }
  .ant-tabs-ink-bar {
    height: 5px;
  }
  .ant-tabs-nav {
    :before {
      border-bottom: ${(props) => props.borderbottom};
    }
    .ant-tabs-tab:first-child {
      margin: ${(props) => props.margin};
    }
  }
`;
