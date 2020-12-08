import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import {
  Slider,
  Typography,
  Button,
  Form,
  Row,
  Col,
  Select,
  InputNumber,
} from "antd";
import { MainButton } from "SRC/styles/mainStyled";
import LoadingText from "SRC/components/common/LoadingText";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { useParams } from "react-router-dom";
import { useUpdateConfigModel } from "SRC/hooks/Config";
import { useGetAllAlgorithm } from "SRC/hooks/Model";
import { DEFAULT_CONFIG } from "SRC/resource/string";
import { WrapperAdvance } from "./styled";

const listConfig = {
  batchSize: {
    0: 32,
    25: 64,
    50: 128,
    75: 256,
    100: 512,
  },
  maxFeatures: {
    0: 500,
    20: 1000,
    40: 3000,
    60: 5000,
    80: 10000,
    100: 30000,
  },
  maxLen: {
    10: 100,
    20: 200,
    30: 300,
    40: 400,
    50: 500,
    60: 600,
    70: 700,
    80: 800,
    90: 900,
    100: 1000,
  },
  embedSize: {
    0: 16,
    20: 32,
    40: 64,
    60: 128,
    80: 256,
    100: 512,
  },
  epochs: {
    0: "0",
    55: "55",
    88: "67",
    100: "100",
  },
  threshold: {
    10: 0.1,
    20: 0.2,
    30: 0.3,
    40: 0.4,
    50: 0.5,
    60: 0.6,
    70: 0.7,
    80: 0.8,
    90: 0.9,
    100: 1.0,
  },
};

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 24 } };

const ConfigAdvance = (props) => {
  const [form] = Form.useForm();
  const {
    data: { config },
  } = props;
  const { listAlgorithm, loading: loadingAlgorithm } = useGetAllAlgorithm();
  const { modelId } = useParams();
  const [doUpdateConfig, { loading }] = useUpdateConfigModel();
  const [algorithm, setAlgorithm] = useState({});
  const [isEpochs, setIsEpochs] = useState(false);
  const [hasModify, setHasModify] = useState(false);

  const onFinish = async (a) => {
    if (!loading) {
      const tempData = {};
      Object.keys(a).forEach((item) => {
        if (item !== "algorithm") {
          tempData[item] =
            parseFloat(listConfig[item][a[item]], 10) || config[item];
        }
      });
      const tempConfig = {
        batchSize: tempData.batchSize || config.batchSize,
        maxLen: tempData.maxLen || config.maxLen,
        maxFeatures: tempData.maxFeatures || config.maxFeatures,
        embedSize: tempData.embedSize || config.embedSize,
        epochs: tempData.epochs || config.epochs,
        threshold: tempData.threshold || config.threshold,
        algorithmId: algorithm.id || config.algorithm.id,
      };
      doUpdateConfig({
        config: tempConfig,
        modelId,
      });
    }
  };

  useEffect(() => {
    if (listAlgorithm.length > 0) {
      if (config?.algorithm) {
        setAlgorithm({
          ...config.algorithm,
          children: "choose",
          key: config.algorithm.id,
          id: config.algorithm.coreId,
        });
      }
    }
  }, [config, listAlgorithm]);

  const checkModify = (data = {}) => {
    let tempHasModify = false;
    if (
      config.algorithm.coreId !== (data.value || algorithm.id) ||
      listConfig.batchSize[form.getFieldValue("batchSize")] !==
        config.batchSize ||
      listConfig.maxFeatures[form.getFieldValue("maxFeatures")] !==
        config.maxFeatures ||
      listConfig.maxLen[form.getFieldValue("maxLen")] !== config.maxLen ||
      listConfig.embedSize[form.getFieldValue("embedSize")] !==
        config.embedSize ||
      ((data.value || algorithm.value) > 5 &&
        listConfig.epochs[form.getFieldValue("epochs")] !==
          `${config.epochs}`) ||
      listConfig.threshold[form.getFieldValue("threshold")] !== config.threshold
    ) {
      tempHasModify = true;
    }
    setHasModify(tempHasModify);
  };

  const chooseConfig = (evt, data) => {
    let isShowEpochs = false;
    if (parseInt(data.key, 10) > 5) {
      isShowEpochs = true;
    }
    setIsEpochs(isShowEpochs);

    setAlgorithm({ ...data, id: parseInt(data.key, 10) });
    checkModify(data);
  };

  const getInitValue = (name) => {
    return parseFloat(
      Object.keys(listConfig[name]).find(
        (item) => listConfig[name][item] === config?.[name]
      ),
      10
    );
  };

  const getDefaultValue = (name) => {
    const a = listConfig[name];
    return Object.keys(a).find((item) => a[item] === DEFAULT_CONFIG[name]);
  };

  const onReset = () => {
    form.setFieldsValue({
      batchSize: getDefaultValue("batchSize"),
      maxFeatures: getDefaultValue("maxFeatures"),
      maxLen: getDefaultValue("maxLen"),
      embedSize: getDefaultValue("embedSize"),
      epochs: `${getDefaultValue("epochs")}`,
      threshold: getDefaultValue("threshold"),
    });
  };

  return (
    <WrapperAdvance>
      <Typography.Text className="title-config-advance">
        Advance
      </Typography.Text>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        layout="vertical"
        form={form}
      >
        <div className="contain">
          {algorithm?.id ? (
            <>
              <Row gutter={[12, 12]}>
                <Col span={12}>
                  <Form.Item
                    name="algorithm"
                    label="Algorithm"
                    className="item-config"
                    wrapperCol={{ span: 24 }}
                    labelCol={{ span: 24 }}
                    initialValue={algorithm.id}
                  >
                    <Select
                      // value={3}
                      getPopupContainer={(trigger) => trigger.parentElement}
                      className="input-algorithm"
                      onChange={chooseConfig}
                      loading={loadingAlgorithm}
                    >
                      {listAlgorithm.length > 0 ? (
                        <>
                          <Select.OptGroup label="Basic">
                            {listAlgorithm.map((item) => {
                              if (item.coreId < 6) {
                                return (
                                  <Select.Option
                                    key={item.coreId}
                                    value={item.coreId}
                                  >
                                    {item.coreId}. {item.name}
                                  </Select.Option>
                                );
                              }
                              return null;
                            })}
                          </Select.OptGroup>
                          <Select.OptGroup label="Advance">
                            {listAlgorithm.map((item) => {
                              if (item.coreId > 5) {
                                return (
                                  <Select.Option
                                    key={item.coreId}
                                    value={item.coreId}
                                  >
                                    {item.coreId}. {item.name}
                                  </Select.Option>
                                );
                              }
                              return null;
                            })}
                          </Select.OptGroup>
                        </>
                      ) : (
                        <Select.Option key={1} value={1}>
                          Loading...
                        </Select.Option>
                      )}
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={{ span: 12 }}>
                  <Form.Item
                    name="epochs"
                    label="Epochs"
                    className="item-config"
                    labelCol={{ span: 20 }}
                    wrapperCol={{ span: 24 }}
                    // eslint-disable-next-line react/jsx-no-duplicate-props
                    className={`${isEpochs ? "show" : "hidden"}`}
                    initialValue={100}
                  >
                    <InputNumber
                      min={50}
                      max={3000}
                      placeholder="epochs"
                      className="input-epochs"
                      onChange={checkModify}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </>
          ) : (
            <Loading mode="panel" />
          )}
          {/* /// */}
          {typeof config === "object" ? (
            <>
              <Row gutter={[12, 12]} className="row-config">
                <Col xs={{ span: 24 }} md={{ span: 12 }} className="col-config">
                  <div className="content-col">
                    <Form.Item
                      name="batchSize"
                      label="Batch Size"
                      className="item-config"
                      initialValue={getInitValue("batchSize")}
                    >
                      <Slider
                        marks={listConfig.batchSize}
                        step={null}
                        tooltipVisible={false}
                        onChange={checkModify}
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} className="col-config">
                  <div className="content-col">
                    <Form.Item
                      name="maxFeatures"
                      label="Max Features"
                      className="item-config"
                      initialValue={getInitValue("maxFeatures")}
                    >
                      <Slider
                        marks={listConfig.maxFeatures}
                        step={null}
                        tooltipVisible={false}
                        onChange={checkModify}
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} className="col-config">
                  <div className="content-col">
                    <Form.Item
                      name="maxLen"
                      label="Max Len"
                      className="item-config"
                      initialValue={getInitValue("maxLen")}
                    >
                      <Slider
                        marks={listConfig.maxLen}
                        step={null}
                        tooltipVisible={false}
                        onChange={checkModify}
                      />
                    </Form.Item>
                  </div>
                </Col>

                <Col xs={{ span: 24 }} md={{ span: 12 }} className="col-config">
                  <div className="content-col">
                    <Form.Item
                      name="embedSize"
                      label="Embed Size"
                      className="item-config"
                      initialValue={getInitValue("embedSize")}
                    >
                      <Slider
                        marks={listConfig.embedSize}
                        step={null}
                        tooltipVisible={false}
                        onChange={checkModify}
                      />
                    </Form.Item>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 12 }} className="col-config">
                  <div className="content-col">
                    <Form.Item
                      name="threshold"
                      label="Threshold"
                      className="item-config"
                      initialValue={getInitValue("threshold")}
                    >
                      <Slider
                        marks={listConfig.threshold}
                        step={null}
                        tooltipVisible={false}
                        onChange={checkModify}
                      />
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={{ span: 24 }}
                  md={{ span: 12, offset: 12 }}
                  lg={{ span: 9, offset: 15 }}
                >
                  <Form.Item wrapperCol={{ span: 24 }}>
                    <div className="group-button">
                      <Button
                        type="primary"
                        className="btn-reset"
                        danger
                        onClick={onReset}
                      >
                        Reset default
                      </Button>

                      <MainButton
                        type="primary"
                        htmlType="submit"
                        disabled={!hasModify}
                      >
                        {loading ? <LoadingText title="Loading" /> : "Save"}
                      </MainButton>
                    </div>
                  </Form.Item>
                </Col>
              </Row>
            </>
          ) : (
            <Loading mode="panel" />
          )}
        </div>
      </Form>
    </WrapperAdvance>
  );
};

ConfigAdvance.propTypes = {
  data: PropTypes.instanceOf(Object),
};

ConfigAdvance.defaultProps = {
  data: {},
};

export default ConfigAdvance;
