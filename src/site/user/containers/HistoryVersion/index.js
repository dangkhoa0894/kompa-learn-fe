import PropTypes from "prop-types";
import { Divider, Row, Typography, Modal } from "antd";
import BodyBackground from "SRC/components/common/BodyBackground";
import { useGetAllAlgorithm, useGetDetailModel } from "SRC/hooks/Model";
import React, { memo, useLayoutEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";
import { format } from "date-fns";
import ModalView from "SRC/components/common/Modal";
import {
  ItemHistoryCss,
  WrapperHistoryVersion,
  TemplateInfoCss,
  ContentCaution,
  LoadingCss,
} from "./styled";
import { useChangeVersion } from "./hooks";
import Loading from "../Loading/LoadingView";

const HistoryVersionView = () => {
  const { modelId } = useParams();
  const [{ data }] = useGetDetailModel({
    model: { id: parseInt(modelId, 10) },
    cache: true,
  });
  const [listScore, setListCore] = useState([]);
  const { listAlgorithm } = useGetAllAlgorithm();

  const listAlgMemo = useMemo(() => listAlgorithm, [listAlgorithm]);
  useLayoutEffect(() => {
    if (data?.score) {
      setListCore(data.score);
    }
  }, [data]);

  return (
    <BodyBackground>
      <WrapperHistoryVersion>
        <Typography.Title level={3}>History version</Typography.Title>
        <Row gutter={[12, 12]} className="row-container-version">
          {listScore.map((item) => {
            return (
              <ItemHistory
                key={item.id}
                {...item}
                listAlg={listAlgMemo}
                data={data}
              />
            );
          })}
        </Row>
      </WrapperHistoryVersion>
    </BodyBackground>
  );
};

export default HistoryVersionView;

const ItemHistory = memo((props) => {
  const {
    version,
    updateAt,
    algorithm,
    active,
    accuracy,
    data,
    modelId,
  } = props;
  const [handleChangeVersion, { loading }] = useChangeVersion();
  const activeVersion = () => {
    Modal.warning({
      title: "Caution",
      content: (
        <ContentCaution>
          <Typography.Text level={2}>
            Do you want change version ?
          </Typography.Text>
        </ContentCaution>
      ),
      okText: "Change",
      onOk() {
        handleChangeVersion({
          data: {
            modelId,
            version,
            prevActive: data.score.find((item) => item.active)?.id || -1,
          },
        });
      },
      okCancel() {},
      width: "fit-content",
      className: "model-warning-custom",
    });
  };

  return (
    <ItemHistoryCss xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
      <ModalView
        isOpen={loading}
        content={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <LoadingCss>
            <Loading mode="panel" />
          </LoadingCss>
        }
        destroyOnClose
        width="fit-content"
        centered
        maskClosable
      />

      <div className="content-item-history">
        <div className="header-version">
          <Typography.Text>Version: {version || "Error"}</Typography.Text>
          <div
            className={`status-active ${active && "active"}`}
            onClick={activeVersion}
            role="presentation"
          >
            {active ? <FaPlayCircle /> : <FaPauseCircle />}
          </div>
        </div>
        <Divider className="divider" />
        <TemplateInfo label="Accuracy :" content={`${accuracy}`} />
        <TemplateInfo label="Algorithm using: " content={algorithm.name} />
        <TemplateInfo
          label="Last update :"
          content={format(new Date(updateAt), "dd-MM-yyyy HH:mm:ss")}
        />
      </div>
    </ItemHistoryCss>
  );
});

ItemHistory.propTypes = {
  accuracy: PropTypes.number,
  active: PropTypes.bool,
  algorithm: PropTypes.instanceOf(Object),
  updateAt: PropTypes.string,
  version: PropTypes.string,
  data: PropTypes.instanceOf(Object),
  modelId: PropTypes.number,
};
ItemHistory.defaultProps = {
  accuracy: 0,
  active: false,
  algorithm: {},
  updateAt: "",
  version: "",
  data: {},
  modelId: 0,
};

const TemplateInfo = (props) => {
  const { content, label } = props;
  return (
    <TemplateInfoCss>
      <Typography.Text className="label-template-version">
        {label}
      </Typography.Text>
      <Typography.Text className="content-template-version">
        {content}
      </Typography.Text>
    </TemplateInfoCss>
  );
};

TemplateInfo.propTypes = {
  content: PropTypes.string,
  label: PropTypes.string,
};

TemplateInfo.defaultProps = {
  content: "",
  label: "",
};
