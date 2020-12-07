import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { Typography } from 'antd';
import { FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';
import { WrapperHeader, ItemHeader } from './styled';

const Header = (props) => {
  const { columns, sorted, changeSort } = props;

  const handleSort = (item) => {
    changeSort({
      sortBy: item.dataIndex,
    });
  };

  const renderSortActive = () => {
    return sorted?.orderDesc ? (
      <FaSortAlphaUp className="active" />
    ) : (
      <FaSortAlphaDown className="active" />
    );
  };
  return (
    <WrapperHeader>
      <tr>
        {columns.map((item) => {
          if (item?.width) {
            delete item.width;
          }
          return (
            <ItemHeader
              key={item.dataIndex}
              {...item}
              onClick={() => item.sort && handleSort(item)}
              sort={item.sort}
            >
              <div className="th-content">
                <Typography.Text className="th-title">{item.title}</Typography.Text>
                <div className="sort">
                  {item.sort &&
                    (sorted?.sortBy === item.dataIndex ? renderSortActive() : <FaSortAlphaDown />)}
                </div>
              </div>
            </ItemHeader>
          );
        })}
      </tr>
    </WrapperHeader>
  );
};

Header.propTypes = {
  changeSort: PropTypes.func,
  sorted: PropTypes.instanceOf(Object),
  columns: PropTypes.instanceOf(Array),
};

Header.defaultProps = {
  changeSort: () => {},
  sorted: {},
  columns: [],
};

export default memo(Header);
