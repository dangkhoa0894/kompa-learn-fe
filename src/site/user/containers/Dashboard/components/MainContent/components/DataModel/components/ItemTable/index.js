import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'antd';

const ItemTable = (props) => {
  const {
    data: { title, subtitle, lastUpdate },
    config,
  } = props;

  return (
    <div className={`model-name fl ${config.textAlign}`}>
      <Typography.Text className="rt">{title}</Typography.Text>
      <Typography.Text className="sp">{subtitle}</Typography.Text>
      <Typography.Text>{lastUpdate}</Typography.Text>
    </div>
  );
};

ItemTable.defaultProps = {
  data: {},
  config: {},
};
ItemTable.propTypes = {
  data: PropTypes.instanceOf(Object),
  config: PropTypes.instanceOf(Object),
};

export default ItemTable;
