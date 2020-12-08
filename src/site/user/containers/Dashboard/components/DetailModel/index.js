import PropTypes from "prop-types";
import React, { memo, useEffect, useMemo, useState } from "react";
import { notification, Typography } from "antd";
import { ERROR_CODE, TYPE_MODEL } from "SRC/resource/string";
import {
  GET_INFO_MODEL_CLIENT,
  GET_PREDICT_DEMO,
} from "SRC/graphql/Model/Query";
import { useQuery, useLazyQuery } from "@apollo/client";
import { useGetDetailModel } from "SRC/hooks/Model";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { useHistory } from "react-router-dom";
import noData from "SRC/resource/images/noData_1.jpg";
import {
  contentModifyModel,
  viewDetailModel,
} from "SRC/graphql/Cache/initialCache";
import ItemData from "SRC/components/ItemPredict";
import {
  WrapperInfoModel,
  InfoContainer,
  DataTrainContainer,
  TitleProperties,
  TitleHeader,
  RefreshCss,
} from "./styled";

const DetailModel = (props) => {
  const { isShowDetail } = props;

  const { data } = useQuery(GET_INFO_MODEL_CLIENT);

  const [doRefresh, { loading, data: dataPredict }] = useLazyQuery(
    GET_PREDICT_DEMO,
    {
      fetchPolicy: "network-only",
    }
  );

  const [{ data: dataModel }] = useGetDetailModel({
    model: {
      id: data?.viewDetailModel?.id,
    },
  });

  const [dataDemo, setDataDemo] = useState([]);

  const handleRefresh = () => {
    setDataDemo([]);
    doRefresh({
      variables: {
        dataInput: {
          modelId: viewDetailModel().id,
        },
      },
    });
  };

  useEffect(() => {
    if (data?.viewDetailModel?.id !== 0) {
      handleRefresh();
    }
  }, [data?.viewDetailModel?.id]);

  useEffect(() => {
    if (dataPredict?.templatePredict && isShowDetail) {
      const tempData = dataPredict.templatePredict;
      if (tempData?.statusCode === ERROR_CODE.SUCCESS) {
        if (Array.isArray(tempData.data)) {
          setDataDemo(tempData.data);
        }
      } else {
        notification.error({
          message: "Error message",
          description: tempData.message,
        });
      }
    }
  }, [dataPredict]);

  const dataMemo = useMemo(() => dataModel, [dataModel?.id]);

  return (
    <WrapperInfoModel isShowDetail={isShowDetail}>
      {data?.viewDetailModel?.id === 0 ? (
        <div className="not-found-data">
          <Typography.Title level={3}>Please choose model.</Typography.Title>
          <img src={noData} alt="not data" />
        </div>
      ) : (
        <div>
          <InfoModel dataModel={dataMemo} />

          <DataTrain
            dataPredict={dataDemo}
            loading={loading}
            onRefresh={handleRefresh}
            dataModel={dataMemo}
          />
          {/* <OverallModel /> */}
        </div>
      )}
    </WrapperInfoModel>
  );
};

DetailModel.propTypes = {
  isShowDetail: PropTypes.bool,
};

DetailModel.defaultProps = {
  isShowDetail: false,
};

export default DetailModel;

const InfoModel = memo((props) => {
  const {
    dataModel,
    dataModel: { modelName, owner, descriptions },
  } = props;
  return (
    <InfoContainer>
      <Typography.Title level={2} className="model-name">
        {modelName || "Loading..."}
      </Typography.Title>
      <Typography.Text strong className="department-model">
        {owner || "Chưa cập nhật"}
      </Typography.Text>
      <TitleProperties>Project Descriptions</TitleProperties>
      <div className="info-model">{descriptions || "Chưa cập nhật"}</div>
      <TitleProperties>Training Classification</TitleProperties>
      <div className="info-model">
        <span>
          {TYPE_MODEL[dataModel.typeModel - 1]?.label || "Chưa cập nhật"}{" "}
        </span>
        {TYPE_MODEL[dataModel.typeModel - 1]?.icon}
      </div>
    </InfoContainer>
  );
});

InfoModel.propTypes = {
  dataModel: PropTypes.shape({
    modelName: PropTypes.string,
    owner: PropTypes.string,
    typeModel: PropTypes.number,
    descriptions: PropTypes.string,
  }),
};

InfoModel.defaultProps = {
  dataModel: {
    modelName: "Loading...",
    owner: "Loading...",
    typeModel: "Loading...",
    descriptions: "Loading...",
  },
};

const DataTrain = (props) => {
  const { dataPredict, loading, onRefresh, dataModel } = props;
  const history = useHistory();

  const changePage = () => {
    contentModifyModel({
      contentActive: "",
      data: "",
    });
    history.push(`/model/modify-data/view/${dataModel.id}`);
  };

  return (
    <DataTrainContainer>
      <TitleHeader>
        <TitleProperties>Trained Data Preview</TitleProperties>
        <Typography.Text className="button-func" onClick={changePage}>
          View all
        </Typography.Text>
      </TitleHeader>
      <div className="view-data-train">
        {loading ? (
          <Loading mode="panel" />
        ) : (
          <>
            {dataPredict &&
              dataPredict.length > 0 &&
              dataPredict.map((item) => {
                return (
                  <ItemData dataModel={dataModel} key={item.id} {...item} />
                );
              })}
            <RefreshCss onClick={onRefresh}>
              <Typography.Text>Load more</Typography.Text>
            </RefreshCss>
          </>
        )}
      </div>
    </DataTrainContainer>
  );
};

DataTrain.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
  dataPredict: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  onRefresh: PropTypes.func,
};

DataTrain.defaultProps = {
  dataModel: {},
  dataPredict: [],
  loading: true,
  onRefresh: () => {},
};
