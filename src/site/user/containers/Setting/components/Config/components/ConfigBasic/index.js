import PropTypes from "prop-types";
import React, { useState } from "react";
import { Typography, Form, Row, Col, Input, notification } from "antd";
import { MainButton } from "SRC/styles/mainStyled";
import LoadingText from "SRC/components/common/LoadingText";
import { useMutation } from "@apollo/client";
import { UPDATE_INFO_MODEL } from "SRC/graphql/Model/Mutations";
import { ERROR_CODE, _TYPENAME } from "SRC/resource/string";
import { ConfigBasicContain } from "./styled";

const formItemLayout = { labelCol: { span: 6 }, wrapperCol: { span: 24 } };
const ConfigBasic = (props) => {
  const {
    data: { modelName, descriptions, owner, id },
  } = props;
  const [form] = Form.useForm();
  const [doUpdateInfo, { loading }] = useMutation(UPDATE_INFO_MODEL);
  const [isModify, setIsModify] = useState(false);

  const onFinish = async (data) => {
    if (
      !loading &&
      (data.modelName !== modelName ||
        data.descriptions !== descriptions ||
        data.owner !== owner)
    ) {
      doUpdateInfo({
        variables: {
          dataInput: {
            modelId: id,
            newName: data.modelName,
            newDescriptions: data.descriptions,
            newOwner: data.owner,
          },
        },
        update: (cache, { data: { updateInfoModel } }) => {
          try {
            if (updateInfoModel.statusCode === ERROR_CODE.SUCCESS) {
              cache.modify({
                id: `${_TYPENAME.RES_MODEL}:${id}`,
                fields: {
                  modelName() {
                    return data.modelName;
                  },
                  descriptions() {
                    return data.descriptions;
                  },
                  owner() {
                    return data.owner;
                  },
                },
              });
              setIsModify(false);
              notification.success({
                message: "Message",
                description: "Update info model successful",
              });
            } else {
              throw new Error(updateInfoModel.message);
            }
          } catch (e) {
            notification.error({
              message: "Error message",
              description: e.message,
            });
          }
        },
      });
      //
    }
  };

  const checkModify = () => {
    let hasModify = false;
    if (
      form.getFieldValue("modelName") !== modelName ||
      form.getFieldValue("descriptions") !== descriptions ||
      form.getFieldValue("owner") !== owner
    ) {
      hasModify = true;
    }
    setIsModify(hasModify);
  };
  return (
    <ConfigBasicContain>
      <Typography.Text className="title-config-advance">Basic</Typography.Text>
      <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={onFinish}
        layout="vertical"
        form={form}
      >
        <Row gutter={[12, 12]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="modelName"
              label="Model name"
              className="model-config"
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              initialValue={modelName}
            >
              <Input type="text" onChange={checkModify} />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="owner"
              label="Owner"
              className="model-config"
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              initialValue={owner}
            >
              <Input
                type="text"
                placeholder={owner ? "" : "Update owner"}
                onChange={checkModify}
              />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }}>
            <Form.Item
              name="descriptions"
              label="Descriptions"
              className="model-config"
              labelCol={{ span: 20 }}
              wrapperCol={{ span: 24 }}
              initialValue={descriptions}
            >
              <Input.TextArea
                type="text"
                placeholder={descriptions ? "" : "Update descriptions"}
                className="input-descriptions"
                onChange={checkModify}
              />
            </Form.Item>
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
                <MainButton
                  type="primary"
                  htmlType="submit"
                  disabled={!isModify}
                >
                  {loading ? <LoadingText title="Loading" /> : "Save"}
                </MainButton>
              </div>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </ConfigBasicContain>
  );
};

ConfigBasic.propTypes = {
  data: PropTypes.instanceOf(Object),
};
ConfigBasic.defaultProps = {
  data: {},
};

export default ConfigBasic;
