import styled from 'styled-components';
import { Modal } from 'antd';

export const ContainerModal = styled(Modal)`
  width: fit-content;
  .ant-modal-content {
    border-radius: 5px;
    .ant-modal-body {
      margin: 0px;
    }
  }

  .ant-modal-header {
    display: ${(props) => props.isHeader};
  }
  .ant-modal-footer {
    display: ${(props) => props.isFooter};
    justify-content: flex-end;
    border-top: unset;
    > button:first-child {
      display: ${(props) => (props.onCancel ? 'block' : 'none')};
    }
    > button:last-child {
      display: ${(props) => (props.onOk ? 'block' : 'none')};
    }
  }
`;
export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  > span {
    /* padding-bottom: 15px; */
  }
`;
