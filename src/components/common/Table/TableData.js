import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { TableView } from './styled';

function TableData(props) {
  const { columns, paddingCell, className, pagination, footer, data, loading } = props;
  const widthColumn = 100 / parseFloat(columns.length);
  columns.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.width = `${widthColumn}%`;
  });

  return (
    <TableView
      rowKey={(record) => record.uid}
      key="table"
      loading={loading}
      paddingCell={paddingCell}
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination ? { position: pagination } : false}
      footer={footer}
    />
  );
}

TableData.propTypes = {
  className: PropTypes.string,
  columns: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
  footer: PropTypes.func,
  paddingCell: PropTypes.string,
  pagination: PropTypes.bool,
  loading: PropTypes.bool,
};

TableData.defaultProps = {
  columns: [],
  data: [],
  loading: true,
  pagination: false,
  className: '',
  footer: () => {},
  paddingCell: '5px 16px', // gán index cho row
};
export default memo(TableData);
