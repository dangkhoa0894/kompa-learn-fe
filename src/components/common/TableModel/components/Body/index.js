import React, { useState, useLayoutEffect, memo } from "react";
import PropTypes from "prop-types";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { GET_INFO_MODEL_CLIENT } from "SRC/graphql/Model/Query";
import { useQuery } from "@apollo/client";
import { WrapperBody, ItemData, Content } from "./styled";

const Body = (props) => {
  const {
    dataPage,
    data,
    columns,
    pagination,
    sorted,
    loading,
    onClick,
  } = props;
  const [dataTable, setDataTable] = useState([]);
  const { data: modelView } = useQuery(GET_INFO_MODEL_CLIENT);
  useLayoutEffect(() => {
    if (sorted.sortBy) {
      let tempData = [...data];
      const itemSort = columns.find((item) => item.dataIndex === sorted.sortBy);
      if (itemSort?.sortData) {
        itemSort.sortData(tempData);
      } else {
        tempData.sort((a, b) => {
          if (a[sorted.sortBy] < b[sorted.sortBy]) {
            return -1;
          }
          if (a[sorted.sortBy] > b[sorted.sortBy]) {
            return 1;
          }
          return 0;
        });
      }
      if (sorted.orderDesc) {
        tempData.reverse();
      }
      tempData = tempData.slice(
        pagination.page * pagination.size - pagination.size,
        pagination.page * pagination.size
      );
      setDataTable(tempData);
    } else {
      setDataTable(dataPage);
    }
  }, [sorted, pagination, dataPage]);

  return (
    <WrapperBody>
      {loading ? (
        <tr className="col-span">
          <td className="row-span">
            <Loading mode="panel" />
          </td>
        </tr>
      ) : (
        dataTable.map((item) => {
          return (
            <ItemData
              key={item.id}
              onClick={() => {
                onClick(item, props);
              }}
              active={modelView?.model?.viewModel === item.id}
            >
              {columns.map((item2) => {
                return (
                  <Content key={item2.dataIndex + item.key} {...item2}>
                    {item2.render
                      ? item2.render(item, item2)
                      : item[item2.dataIndex]}
                  </Content>
                );
              })}
            </ItemData>
          );
        })
      )}
    </WrapperBody>
  );
};

Body.propTypes = {
  columns: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
  dataPage: PropTypes.instanceOf(Array),
  onClick: PropTypes.func,
  pagination: PropTypes.instanceOf(Object),
  sorted: PropTypes.shape({
    orderDesc: PropTypes.any,
    sortBy: PropTypes.any,
  }),
  loading: PropTypes.bool,
};
Body.defaultProps = {
  columns: [],
  data: [],
  dataPage: [],
  onClick: () => {},
  pagination: {},
  sorted: {},
  loading: true,
};

export default memo(Body);
