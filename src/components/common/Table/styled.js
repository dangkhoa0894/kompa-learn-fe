import styled from 'styled-components';
import { Table } from 'antd';

export const TableView = styled(Table)`
  border: 1px solid #eaeaea;
  td.ant-table-cell {
    padding: ${(props) => props.paddingCell};
  }
`;
