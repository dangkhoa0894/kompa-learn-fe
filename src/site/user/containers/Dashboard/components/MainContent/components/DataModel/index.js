import PropTypes from "prop-types";
import React, {
  useState,
  useMemo,
  useCallback,
  memo,
  useEffect,
  useRef,
} from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MODELS } from "SRC/graphql/Model/Query";
import {
  useUpdateModel,
  useUploadModelSubscriptions,
} from "SRC/hooks/Realtime";
import { useInfoUser } from "SRC/hooks/User";
import TableData from "SRC/components/common/TableModel";
import { format } from "date-fns";
import StatusModel from "SRC/components/StatusModel";
import { FaListOl, FaTh } from "react-icons/fa";
import { Typography, notification } from "antd";
import { viewDetailModel } from "SRC/graphql/Cache/initialCache";
/* eslint-disable */
import Sentiment_icon from "SRC/resource/images/sentiment_icon.png";
import Topic_icon from "SRC/resource/images/topic_icon.png";
import Multiple_icon from "SRC/resource/images/multiple_icon.png";
import { ModelUserContainer, ContentTable } from "./styled";
import ItemTable from "./components/ItemTable";
import EmptyData from "./components/EmptyData";
import ModelAction from "./components/Action";
import CalculatorAccuracy from "./components/CalculatorAccuracy";
import { debounce } from "SRC/utils/function";

const typeListModel = [
  {
    id: "list",
    label: "List",
    icon: <FaListOl />,
  },
  {
    id: "grid",
    label: "grid",
    icon: <FaTh />,
  },
];

const typeModel = [
  "Topic Classification",
  "Sentiment",
  "Multiple Topic & Sentiment",
];
const typeIcon = [
  <img src={Topic_icon} alt="topic" className="topic" />,
  <img src={Sentiment_icon} alt="sentiment" className="sentiment" />,
  <img src={Multiple_icon} alt="multiple" className="multiple" />,
];

const ModelUser = (props) => {
  const { isMoreTemplate, isShowDetail } = props;
  const infoUser = useInfoUser();
  const [dataModel, setDataModel] = useState([]);
  const { data, loading } = useQuery(GET_ALL_MODELS, {
    variables: { dataInput: infoUser.id },
    fetchPolicy: "network-only",
    skip: !infoUser?.id,
  });
  const [{ modelTrain }] = useUpdateModel({ userId: infoUser.id });
  useUploadModelSubscriptions({ userId: infoUser.id });
  const refBody = useRef(null);
  const [typeGrid, setTypeGrid] = useState("list");
  const [heightResize, setHeightResize] = useState({});

  const setHeightDebounce = debounce(setHeightResize, 200);

  useEffect(() => {
    if (refBody.current?.clientHeight !== 0) {
      setHeightDebounce((x) => ({
        ...x,
        minHeight: 0,
        maxHeight: refBody.current?.clientHeight,
        maxHeightDetail: refBody.current?.clientHeight,
      }));
    }
  }, [refBody.current]);

  useEffect(() => {
    if (isShowDetail && refBody.current?.clientHeight !== 0) {
      setHeightDebounce((x) => ({
        ...x,
        maxHeightDetail: refBody.current.clientHeight,
      }));
    }
  }, [isShowDetail, refBody.current]);

  const resizeListener = () => {
    if (refBody.current?.clientHeight !== 0) {
      setHeightDebounce((x) => ({
        ...x,
        minHeight: 0,
        maxHeight: refBody.current?.clientHeight,
        maxHeightDetail: refBody.current?.clientHeight,
      }));
    }
  };

  const getHeight = () => {
    if (isMoreTemplate) {
      return 0;
    }
    if (isShowDetail) {
      return heightResize.maxHeightDetail;
    }
    return heightResize.maxHeight;
  };
  useEffect(() => {
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const columns = useMemo(() => [
    {
      title: "",
      dataIndex: "icon1",
      minWidth: 100,
      maxWidth: 150,
      render: (e) => (
        <div className="group-icon">
          <div className="icon-model">{typeIcon[e.typeModel - 1]}</div>
        </div>
      ),
    },
    {
      title: "My Training Project",
      dataIndex: "modelName",
      sorter: true,
      maxWidth: 200,
      ellipsis: true,
      sticky: true,
      stickyLeft: 0,
      render: (e) => {
        return (
          <ItemTable
            data={{
              title: e.modelName,
              subtitle: e.descriptions || "Chưa cập nhật", // None
            }}
          />
        );
      },
    },
    {
      title: "Accuracy",
      dataIndex: "accuracy",
      ellipsis: true,
      sort: true,
      textAlign: "left",
      sortData: (e) => {
        e.sort((a, b) => {
          return (
            `${(b.score[0]?.accuracy * 100 || 0).toFixed(2)}` -
            `${(a.score[0]?.accuracy * 100 || 0).toFixed(2)}`
          );
        });
        return e;
      },
      minWidth: 150,
      render: (e, preProps) => {
        return (
          <ItemTable
            config={preProps}
            data={{
              title: `${(e?.score[0]?.accuracy * 100 || 0).toFixed(2)} %`,
              subtitle: <CalculatorAccuracy data={e?.score} />,
            }}
          />
        );
      },
    },
    {
      title: "Classification",
      dataIndex: "typeModel",
      minWidth: 150,
      sort: true,
      render: (e) => {
        return (
          <ItemTable
            data={{
              title: typeModel[e.typeModel - 1],
              subtitle: e.totalCategories
                ? `Count: ${e.totalCategories}`
                : "Chưa cập nhật",
            }}
          />
        );
      },
    },
    {
      title: "Status",
      dataIndex: "process",
      sort: true,
      minWidth: 150,
      textAlign: "center",
      render: (e) => {
        return <StatusModel {...e} modelTrainSuccess={modelTrain} />;
      },
    },
    {
      title: "Algorithm",
      dataIndex: "algorithm",
      minWidth: 250,
      render: (e) => (
        <ItemTable
          data={{
            title: e?.score[0]?.algorithm?.name || "Chưa cập nhật",
            subtitle: `Previous: ${
              e.score[1]?.algorithm?.name || "Chưa cập nhật"
            } `,
            lastUpdate: `Last update: ${
              e?.score[1]?.updateAt
                ? format(new Date(e?.score[1]?.updateAt), "dd/MM/yyyy HH:mm:ss")
                : "Chưa cập nhật"
            }`,
          }}
        />
      ),
    },
    {
      title: "",
      dataIndex: "action",
      minWidth: 150,
      textAlign: "right",
      render: (e) => <ModelAction {...e} />,
    },
  ]);

  const clickItemTable = useCallback((e) => {
    if (e.process === 7) {
      viewDetailModel({
        id: e.id,
      });
      props.showDetail(true);
    } else {
      notification.warning({
        description: (
          <Typography.Text>
            Model &nbsp;
            <Typography.Text strong>{e.modelName}</Typography.Text>
            &nbsp; is pending, can't use now.
          </Typography.Text>
        ),
        message: "Caution message",
      });
    }
  });

  useEffect(() => {
    if (data && data?.getAllModels?.data) {
      const tempData = data.getAllModels.data.filter((item) => item.active);
      setDataModel(tempData);
      if (tempData.length <= 0) {
        props.showDetail(false);
      }
    }
  }, [data]);

  useEffect(() => {
    return () => {
      viewDetailModel({
        id: 0,
      });
    };
  }, []);

  const dataModelMemo = useMemo(() => dataModel);
  const loadingMemo = useMemo(() => loading);
  return !infoUser?.id || loading || dataModel?.length > 0 ? (
    <ModelUserContainer
      isMoreTemplate={isMoreTemplate}
      maxHeight={getHeight()}
      ref={refBody}
    >
      <div className="motion">
        <div className="type-list-model">
          {typeListModel.map((item) => {
            return (
              <div
                role="presentation"
                key={item.id}
                className={`item-type ${item.id === typeGrid && "active"}`}
                onClick={() => setTypeGrid(item.id)}
                onKeyPress={() => setTypeGrid(item.id)}
              >
                {item.icon}
                <Typography.Text className="label-type">
                  {item.label}
                </Typography.Text>
              </div>
            );
          })}
        </div>
        {!isMoreTemplate && (
          <ContentTable>
            <TableData
              data={dataModelMemo}
              columns={columns}
              loading={loadingMemo}
              heightTable={getHeight()}
              onClick={clickItemTable}
            />
          </ContentTable>
        )}
      </div>
    </ModelUserContainer>
  ) : (
    infoUser?.id && <EmptyData isMoreTemplate={isMoreTemplate} />
  );
};

ModelUser.propTypes = {
  isMoreTemplate: PropTypes.bool,
  showDetail: PropTypes.func,
};
ModelUser.defaultProps = {
  isMoreTemplate: false,
  showDetail: () => {},
};

export default memo(ModelUser);
