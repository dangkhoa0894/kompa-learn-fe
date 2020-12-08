import PropTypes from "prop-types";
import React, { useEffect, useState, memo, useRef } from "react";
import { Modal } from "antd";
import {
  GET_ALL_DATA_MODEL,
  GET_FILTER_DATA_MODEL,
} from "SRC/graphql/Model/Query";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { useGetDetailModel } from "SRC/hooks/Model";
import { ERROR_CODE } from "SRC/resource/string";
import { debounce } from "SRC/utils/function";
import ItemContent from "../ItemContent";
import { WrapperDataModel } from "./styled";

const DataModel = (props) => {
  const { changeStatusFetch, isFetch } = props;
  const history = useHistory();
  const { modelId } = useParams();
  const { data: dataFilter } = useQuery(GET_FILTER_DATA_MODEL);
  const [
    doRefresh,
    { loading: loadingPredict, data: dataPredict },
  ] = useLazyQuery(GET_ALL_DATA_MODEL, {
    fetchPolicy: "network-only",
  });
  const [{ data }] = useGetDetailModel({
    model: {
      id: modelId,
    },
  });
  const refDatModel = useRef(null);
  const refListScroll = useRef(null);

  const [filter, setFilter] = useState([]);
  const [page, setPage] = useState(1);
  const [dataContent, setDataContent] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [totalFilter, setTotalFilter] = useState(0);

  useEffect(() => {
    refDatModel.current = {
      doRefreshDebounce_300: debounce(doRefresh, 300),
    };

    doRefresh({
      variables: {
        dataInput: {
          modelId: parseInt(modelId, 10),
          page: 0,
          filter,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (dataFilter?.filterDataModel?.data) {
      setIsFilter(true);
      setFilter(dataFilter?.filterDataModel?.data);
      setPage(1);
      doRefresh({
        variables: {
          dataInput: {
            modelId: parseInt(modelId, 10),
            page: 0,
            filter: dataFilter?.filterDataModel?.data,
          },
        },
      });
    }
  }, [dataFilter]);

  useEffect(() => {
    const tempDataPredict = dataPredict?.getDataTrainModelFilter;
    if (
      tempDataPredict?.statusCode === ERROR_CODE.SUCCESS &&
      Array.isArray(tempDataPredict?.data?.listFilter)
    ) {
      setDataContent((x) =>
        isFilter
          ? tempDataPredict.data.listFilter
          : x.concat(tempDataPredict.data.listFilter)
      );
      changeStatusFetch(false);
      if (isFilter) {
        setTotalFilter(tempDataPredict.data.totalFilter);
        setIsFilter(false);
      }
    } else if (tempDataPredict?.statusCode === 400) {
      Modal.error({
        title: "Error Message",
        content: (
          <div>
            <p>{tempDataPredict?.message}</p>
          </div>
        ),
        okText: "Back to DashBoard",
        okButtonProps: { type: "danger" },
        onOk() {
          history.push("/main/dashBoard");
        },
      });
    }
  }, [dataPredict]);

  function fetchMoreData() {
    if (!loadingPredict) {
      const a = page + 1;
      setPage(a);
      refDatModel.current.doRefreshDebounce_300({
        variables: {
          dataInput: {
            modelId: parseInt(modelId, 10),
            page: a - 1,
            filter,
          },
        },
      });
    }
  }
  useEffect(() => {
    if (isFetch && totalFilter > dataContent.length && !isFilter) {
      fetchMoreData();
    }
  }, [isFetch, isFilter]);

  return (
    <WrapperDataModel>
      <div ref={refListScroll} className="list-content">
        {dataContent.map((e, index) => (
          <ItemContent
            key={e.id}
            labels={data?.labels}
            index={index + 1}
            {...e}
            dataModel={data}
          />
        ))}
      </div>

      <div className="loading-content" />
      {totalFilter === dataContent.length && !loadingPredict && (
        <div className="footer-content">
          {" "}
          Filter results has {totalFilter} records
        </div>
      )}
    </WrapperDataModel>
  );
};

DataModel.propTypes = {
  changeStatusFetch: PropTypes.func,
  isFetch: PropTypes.bool,
};

DataModel.defaultProps = {
  changeStatusFetch: () => {},
  isFetch: false,
};

export default memo(DataModel);
