import PropTypes from 'prop-types';
import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Typography } from 'antd';
import { PaginationContainer } from './styled';

const Pagination = (props) => {
  const { pagination, changePagination, data } = props;
  const b = parseInt(data.length / pagination.size, 10);
  const c = parseInt(data.length % pagination.size, 10);
  const sizePage = c === 0 ? b : b + 1;

  const changePage = (index) => {
    const tempPage = {
      page: index,
      size: pagination.size,
    };
    changePagination(tempPage);
  };

  const prePage = () => {
    if (pagination.page !== 1) {
      const tempPage = {
        page: pagination.page - 1,
        size: pagination.size,
      };
      changePagination(tempPage);
    }
  };
  const nextPage = () => {
    if (sizePage !== pagination.page) {
      const tempPage = {
        page: pagination.page + 1,
        size: pagination.size,
      };
      changePagination(tempPage);
    }
  };

  return (
    <PaginationContainer sizePage={sizePage}>
      <div
        className={`btn prev ${!(sizePage > 1 && pagination.page !== 1) && 'hidden'}`}
        onClick={prePage}
        role="presentation"
      >
        <FaChevronLeft />
        <Typography.Text>prev</Typography.Text>
      </div>

      <div className="page-index">
        {Array.from({ length: sizePage }).map((item, index) => {
          const currentPage = index + 1;
          return (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={`${index}page`}
              className={`item-page ${pagination.page === currentPage && 'active'}`}
              onClick={() => changePage(currentPage)}
              onKeyPress={() => changePage(currentPage)}
              role="presentation"
            >
              {currentPage}
            </div>
          );
        })}
      </div>

      <div
        className={`btn next ${!(sizePage > 1 && pagination.page !== sizePage) && 'hidden'}`}
        onClick={nextPage}
        role="presentation"
      >
        <Typography.Text>next</Typography.Text>
        <FaChevronRight />
      </div>
    </PaginationContainer>
  );
};

Pagination.propTypes = {
  changePagination: PropTypes.func,
  pagination: PropTypes.instanceOf(Object),
  data: PropTypes.instanceOf(Array),
};

Pagination.defaultProps = {
  pagination: {
    page: 1,
    size: 5,
  },
  changePagination: () => {},
  data: [],
};
export default Pagination;
