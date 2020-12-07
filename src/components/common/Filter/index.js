import React, { useState } from 'react';
import { FaSortDown, FaCheckSquare, FaSquare } from 'react-icons/fa';
import { Popover } from 'antd';
import { ContainerFilter, ContentData, Item } from './styled';

const Filter = (props) => {
  const [filters, setFilters] = useState([]);
  const getFilter = (value) => {
    let filter = filters.filter((e) => e.id === value.id);
    if (filter.length > 0) {
      filter = filters.filter((e) => e.id !== value.id);
    } else {
      filter = [...filters, value];
    }
    setFilters(filter);
    props.getFilter(filter);
  };

  return (
    <ContainerFilter>
      <Popover
        placement="bottomRight"
        content={<ContentFilter {...props} filters={filters} chooseFilter={getFilter} />}
        trigger="click"
        className="filter"
      >
        {props.label} <FaSortDown />
      </Popover>
    </ContainerFilter>
  );
};
Filter.defaultProps = {
  listFilter: [],
};
export default Filter;

const ContentFilter = (props) => {
  const handlerChoose = (value) => {
    props.chooseFilter(value);
  };

  const getActiveTag = (data) => {
    const temp = props.filters.filter((e) => e.id === data.id);
    if (temp.length > 0) {
      return true;
    }
    return false;
  };

  return (
    <ContentData>
      {props.listFilter.map((item) => {
        return (
          <Item key={item.id} onClick={() => handlerChoose(item)}>
            {getActiveTag(item) ? <FaCheckSquare /> : <FaSquare />}
            {item.label}
          </Item>
        );
      })}
    </ContentData>
  );
};
