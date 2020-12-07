import React, { useState, useEffect, useMemo, useCallback, memo, useRef } from 'react';
import PropTypes from 'prop-types';
import { WrapperTable } from './styled';
import Header from './components/Header';
import Body from './components/Body';
import Pagination from './components/Pagination';
/* {
sortBy:'asf',
orderDesc:true
 } */
/*
 page
 sizePage
 */
const TableModelView = (props) => {
  const { data: dataProps, columns, loading, onClick, heightTable } = props;
  const [sorted, setSorted] = useState({
    sortBy: '',
    orderDesc: false,
  });
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    size: 5,
  });

  const refTable = useRef(null);
  useEffect(() => {
    let ccPage = parseInt((heightTable - 150) / 86, 10);
    if (ccPage < 5) {
      ccPage = 5;
    }
    setPagination((x) => {
      return {
        ...x,
        size: ccPage,
      };
    });
  }, [heightTable]);

  useEffect(() => {
    let tempData = [...dataProps];
    tempData = tempData.slice(
      pagination.page * pagination.size - pagination.size,
      pagination.page * pagination.size,
    );
    setData(tempData);
  }, [dataProps, pagination]);

  const changeSort = useCallback((item) => {
    const tempSort = {
      sortBy: item.sortBy,
      orderDesc: false,
    };
    if (sorted.sortBy === item.sortBy) {
      tempSort.orderDesc = !sorted.orderDesc;
    }
    setSorted(tempSort);
  });

  const handleChangePage = useCallback((item) => {
    setPagination(item);
  });

  const paginationMemo = useMemo(() => pagination);
  const dataMemo = useMemo(() => data);
  const sortedMemo = useMemo(() => sorted);
  const dataPropsMemo = useMemo(() => dataProps);
  const columnsMemo = useMemo(() => columns);
  const loadingMemo = useMemo(() => loading);
  const onClickMemo = useCallback((e) => {
    onClick(e);
  }, []);

  return (
    <>
      <WrapperTable columns={columns} ref={refTable}>
        <table className="table" cellSpacing={12}>
          <Header sorted={sortedMemo} changeSort={changeSort} columns={columnsMemo} />
          <Body
            sorted={sortedMemo}
            dataPage={dataMemo}
            pagination={paginationMemo}
            data={dataPropsMemo}
            columns={columnsMemo}
            loading={loadingMemo}
            onClick={onClickMemo}
          />
        </table>
      </WrapperTable>
      <Pagination
        data={dataPropsMemo}
        pagination={paginationMemo}
        changePagination={handleChangePage}
      />
    </>
  );
};

TableModelView.propTypes = {
  data: PropTypes.instanceOf(Array),
  columns: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  heightTable: PropTypes.number,
};

TableModelView.defaultProps = {
  columns: [],
  data: [],
  loading: false,
  onClick: () => {},
  heightTable: 0,
};
export default memo(TableModelView);
