import { css } from 'styled-components';

export default () => css`
  button {
    cursor: pointer;
  }
  .icon {
    display: flex;
  }
  .ant-popover {
    z-index: 3;
  }

  .ant-popover-inner-content {
    padding: 0px;
  }
  .ant-popover-inner {
    border-radius: 5px;
  }
  .model-warning-custom {
    .ant-modal-confirm-content {
      margin: 0px !important;
    }
  }
  .ant-notification {
    z-index: 99999999999999;
  }
  /* //typography */
  .ant-typography {
    margin: 0 !important;
  }
  g[aria-label='Chart created using amCharts library'] {
    display: none;
  }

  .custom-tooltip-border-radius {
    .ant-tooltip-inner {
      border-radius: 10px;
    }
  }
`;
