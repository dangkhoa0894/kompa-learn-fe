import React from "react";
import FormView from "SRC/components/common/Form";
import { Row, Typography } from "antd";
import { MainButton } from "SRC/styles/mainStyled";
import { FaCreditCard } from "react-icons/fa";
import { ContainerApiKey, ColApi } from "./styled";

const ApiKeyView = () => {
  return (
    <ContainerApiKey>
      <FormView title="API KEY">
        <Row align="middle" className="row-content">
          <ColApi className="" xs={{ span: 24 }}>
            <div className="api-key">
              <FaCreditCard />
              <Typography.Text className="label-api">
                Your API Key:
              </Typography.Text>
              <Typography.Text className="api">
                fa385791d7ed579bf12a81f48f779038f1ebe7ec
              </Typography.Text>
            </div>
            <MainButton type="primary" padding="0px 8px" height="30px">
              Revoke and re-generate
            </MainButton>
          </ColApi>
        </Row>
      </FormView>
    </ContainerApiKey>
  );
};

export default ApiKeyView;
