import React from "react";
import { Typography, Button } from "antd";
import { useHistory } from "react-router-dom";
import emptyImage from "SRC/resource/images/noData.png";
import { EmptyDataStyled } from "./styled";

const EmptyData = (props) => {
  const history = useHistory();

  const createModel = () => {
    history.push("/model/create");
  };

  return (
    <EmptyDataStyled {...props}>
      <div className="empty-image">
        <img src={emptyImage} alt="empty data" />
      </div>
      <div className="empty-content">
        <Typography.Title level={3} className="content-title">
          There is no data to display
        </Typography.Title>
        <Typography.Title level={3} className="content-title">
          Setup your training
        </Typography.Title>
        <Typography.Text className="content-sub">
          Choose our pre-train data or update your own data to get start
        </Typography.Text>

        <div>
          <Button color="primary" onClick={createModel}>
            Create new Model
          </Button>
        </div>
      </div>
    </EmptyDataStyled>
  );
};

export default EmptyData;
