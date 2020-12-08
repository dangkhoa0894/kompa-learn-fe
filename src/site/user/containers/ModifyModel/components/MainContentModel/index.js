import PropTypes from "prop-types";
import React, { useEffect, useState, memo, useCallback, useMemo } from "react";
import { Typography, Modal } from "antd";
import { PREDICT_ALL, GET_ACTIVE_MODIFY_MODEL } from "SRC/graphql/Model/Query";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import { useGetDetailModel, useGetDataModifyCache } from "SRC/hooks/Model";
import LoadingBlock from "SRC/components/common/LoadingBlock";
import { ERROR_CODE } from "SRC/resource/string";
import { RiArrowDropRightLine } from "react-icons/ri";
import ButtonMenu from "SRC/components/common/ButtonMenu";
import { MainContentWrapper } from "./styled";
import ItemContent from "./components/ItemContent";

const MainContentModel = (props) => {
  const {
    toggleShowFilter,
    isShowFilter,
    changeStatusFetch,
    isFetch,
    checkOwnerModel,
  } = props;
  const { modelId } = useParams();
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: parseInt(modelId, 10),
    },
  });

  const checkOwnerModelMemo = useCallback((e) => checkOwnerModel(e));
  const isFetchMemo = useMemo(() => isFetch, [isFetch]);
  return (
    <MainContentWrapper>
      <div className="main-title">
        <ButtonMenu
          role="presentation"
          onClick={toggleShowFilter}
          isOpen={isShowFilter}
        />
        <Typography.Title level={4} className="top-title">
          <span className="span-top-title"> My Training Dashboard</span>{" "}
          <RiArrowDropRightLine /> {infoModel.modelName}
        </Typography.Title>
      </div>
      <ListContent
        changeStatusFetch={changeStatusFetch}
        isFetch={isFetchMemo}
        checkOwnerModel={checkOwnerModelMemo}
      />
    </MainContentWrapper>
  );
};

MainContentModel.propTypes = {
  changeStatusFetch: PropTypes.func,
  checkOwnerModel: PropTypes.func,
  isFetch: PropTypes.bool,
  isShowFilter: PropTypes.bool,
  toggleShowFilter: PropTypes.func,
};

MainContentModel.defaultProps = {
  changeStatusFetch: () => {},
  checkOwnerModel: () => {},
  isFetch: false,
  isShowFilter: false,
  toggleShowFilter: () => {},
};

export default memo(MainContentModel);

const ListContent = memo((props) => {
  const history = useHistory();
  const { changeStatusFetch, isFetch, checkOwnerModel } = props;
  const { modelId } = useParams();
  const [
    doRefresh,
    { loading: loadingPredict, data: dataPredict },
  ] = useLazyQuery(PREDICT_ALL, {
    fetchPolicy: "network-only",
  });
  const [{ data }] = useGetDetailModel({
    model: {
      id: modelId,
    },
  });
  const [page, setPage] = useState(1);
  const [dataContent, setDataContent] = useState([]);
  const { data: contentModify } = useGetDataModifyCache();
  const { data: tempModifyData } = useQuery(GET_ACTIVE_MODIFY_MODEL);
  const [modifyData, setModifyData] = useState({});

  useEffect(() => {
    if (tempModifyData?.contentModifyModel?.data) {
      setModifyData(tempModifyData?.contentModifyModel?.data);
    }
  }, [tempModifyData]);

  useEffect(() => {
    doRefresh({
      variables: {
        dataInput: {
          modelId: parseInt(modelId, 10),
          page: page - 1,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (
      dataPredict?.predictAll?.statusCode === ERROR_CODE.SUCCESS &&
      Array.isArray(dataPredict?.predictAll?.data)
    ) {
      setDataContent([...dataContent, ...dataPredict.predictAll.data]);
      changeStatusFetch(false);
    } else if (dataPredict?.predictAll?.statusCode === 400) {
      Modal.error({
        title: "Error Message",
        content: (
          <div>
            <p>{dataPredict?.predictAll?.message}</p>
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
      doRefresh({
        variables: {
          dataInput: {
            modelId: parseInt(modelId, 10),
            page: a - 1,
          },
        },
      });
    }
  }

  useEffect(() => {
    if (isFetch && data.totalRows > dataContent.length) {
      fetchMoreData();
    }
  }, [isFetch]);

  const isActive = useCallback(
    (currentItem) => {
      if (currentItem.id === contentModify?.contentActive?.id) {
        return true;
      }
      return false;
    },
    [contentModify.contentActive]
  );
  const dataModifyModel = useCallback(
    (e) => {
      if (modifyData[e.id]) return [...modifyData[e.id]];
      return false;
    },
    [modifyData]
  );

  return (
    <>
      <div className="list-content">
        {dataContent.map((e, index) => {
          return (
            <ItemContent
              checkOwnerModel={checkOwnerModel}
              key={e.id}
              modifyData={dataModifyModel(e)}
              index={index + 1}
              {...e}
              dataModel={data}
              isActive={isActive(e)}
            />
          );
        })}
      </div>
      <div className="loading-content">
        {data.totalRows > dataContent.length &&
          Array.from({ length: 1 }).map((e, index) => {
            //   eslint-disable-next-line
            return <LoadingBlock key={`${index} key`} mode="panel" />;
          })}
      </div>
    </>
  );
});

ListContent.propTypes = {
  changeStatusFetch: PropTypes.func,
  isFetch: PropTypes.bool,
  checkOwnerModel: PropTypes.func,
};

ListContent.defaultProps = {
  changeStatusFetch: () => {},
  checkOwnerModel: () => {},
  isFetch: false,
};
