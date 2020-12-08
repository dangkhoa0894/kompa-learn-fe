import { useQuery } from "@apollo/client";
import { Checkbox, Tooltip, Typography } from "antd";
import { filterDataModel } from "SRC/graphql/Cache/initialCache";
import { GET_DETAIL_MODEL_WITH_COUNTER_LABEL_DB } from "SRC/graphql/Model/Query";
import PropTypes from "prop-types";
import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import theme from "SRC/styles/theme";
import { WrapperFilterData } from "./styled";

const FilterData = (props) => {
  const { isShowFilter } = props;
  const { modelId } = useParams();
  const [infoModel, setInfoModel] = useState({});
  useQuery(GET_DETAIL_MODEL_WITH_COUNTER_LABEL_DB, {
    variables: {
      dataInput: {
        modelId: parseInt(modelId, 10),
      },
    },
    onCompleted: (res) => setInfoModel(res.getDetailModelWithCounterLabel.data),
  });
  const [dataLabel, setDataLabel] = useState([]);

  useEffect(() => {
    if (infoModel?.labels && infoModel?.labels.length > 0) {
      setDataLabel(
        infoModel.labels.map((item) => ({
          label:
            item.labelName.length > 39 ? (
              <Tooltip
                title={` ${item.labelName} (${item.counter})`}
                placement="topRight"
                color={theme.colors.blue.blue_1}
              >
                {item.labelName} - ({item.counter})
              </Tooltip>
            ) : (
              `${item.labelName} - (${item.counter})`
            ),
          value: item.id,
        }))
      );
    }
  }, [infoModel]);

  const onChangeCheckBox = (da) => {
    filterDataModel({ data: da.map((e) => ({ labelId: e })) });
  };

  return (
    <WrapperFilterData isShowFilter={isShowFilter}>
      <div className="title-filter">
        <Typography.Title level={3}>{infoModel?.modelName}</Typography.Title>
      </div>

      <div className="content-filter scroll-custom-panel ">
        <Typography.Title level={4} className="header-topic">
          Topic filter
        </Typography.Title>
        <Checkbox.Group
          options={dataLabel}
          defaultValue={dataLabel.length > 0 && dataLabel[0]?.value}
          onChange={onChangeCheckBox}
          className="item-filter"
        />
      </div>
    </WrapperFilterData>
  );
};

FilterData.propTypes = {
  isShowFilter: PropTypes.bool,
};
FilterData.defaultProps = {
  isShowFilter: false,
};

export default memo(FilterData);
