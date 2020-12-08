import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GET_PREDICT_BY_PAGE } from "SRC/graphql/Model/Query";
import { useLazyQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import ItemData from "SRC/components/ItemPredict";
import { ERROR_CODE } from "SRC/resource/string";
import { WrapperPredict } from "./styled";

const PredictView = (props) => {
  const {
    dataModel: { totalRows },
  } = props;
  const { modelId } = useParams();
  const [page, setPage] = useState(0);
  const [doRefresh, { loading: loadingPredict, data }] = useLazyQuery(
    GET_PREDICT_BY_PAGE,
    {
      // fetchPolicy: 'network-only',
    }
  );
  const [dataPredict, setDataPredict] = useState([]);

  const fetchDataPredict = () => {
    doRefresh({
      variables: {
        dataInput: {
          page,
          modelId: parseInt(modelId, 10),
        },
      },
    });
  };

  useEffect(() => {
    fetchDataPredict();
  }, [page]);

  useEffect(() => {
    if (
      data?.predictByPage &&
      data.predictByPage.statusCode === ERROR_CODE.SUCCESS
    ) {
      setDataPredict(data.predictByPage.data || []);
    }
  }, [data]);

  const backPredict = () => {
    if (page > 0) {
      setPage((x) => x - 1);
    }
  };

  const forwardPredict = () => {
    if (page < totalRows) {
      setPage((x) => x + 1);
    }
  };

  return (
    <WrapperPredict>
      <div className="header-analysis-tag">
        <Typography.Title level={3}>Trained data preview</Typography.Title>
      </div>
      <div className="body-analysis-predict">
        <div className="scroll-content">
          {loadingPredict ? (
            <Loading mode="panel" />
          ) : (
            <>
              {dataPredict &&
                dataPredict.length > 0 &&
                dataPredict.map((item) => {
                  return (
                    <ItemData
                      dataModel={props.dataModel}
                      key={item.id}
                      {...item}
                    />
                  );
                })}
            </>
          )}
        </div>
      </div>
      <div className="button-predict">
        <div className="pagination">
          {page * 5} - {(page + 1) * 5}{" "}
          <span className="pagination-total"> of {totalRows}</span>
        </div>
        <div className="button">
          <IoIosArrowBack onClick={backPredict} />
          <div className="divide" />
          <IoIosArrowForward onClick={forwardPredict} />
        </div>
      </div>
    </WrapperPredict>
  );
};

export default PredictView;
PredictView.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

PredictView.defaultProps = {
  dataModel: {},
};
