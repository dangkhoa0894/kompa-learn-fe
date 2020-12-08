import PropTypes from "prop-types";
import { Typography } from "antd";
import ButtonMenu from "SRC/components/common/ButtonMenu";
import { useGetDetailModel } from "SRC/hooks/Model";
import React, { useCallback, useMemo } from "react";
import { RiArrowDropRightLine } from "react-icons/ri";
import { useParams } from "react-router-dom";
import { WrapperMainViewData } from "./styled";
import DataModel from "./components/dataModel";

const MainViewData = (props) => {
  const { isShowFilter, toggleShowFilter, changeStatusFetch, isFetch } = props;
  const { modelId } = useParams();
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: parseInt(modelId, 10),
    },
  });

  const toggleMenu = () => {
    toggleShowFilter();
  };

  const changeStatusFetchMemo = useCallback((e) => changeStatusFetch(e), []);
  const isFetchMemo = useMemo(() => isFetch, [isFetch]);
  return (
    <WrapperMainViewData>
      <div className="main-title">
        <ButtonMenu
          role="presentation"
          onClick={toggleMenu}
          isOpen={isShowFilter}
        />
        <Typography.Title level={4} className="top-title">
          <span className="span-top-title"> My Training Dashboard</span>{" "}
          <RiArrowDropRightLine /> {infoModel.modelName}
        </Typography.Title>
      </div>
      <DataModel
        changeStatusFetch={changeStatusFetchMemo}
        isFetch={isFetchMemo}
      />
    </WrapperMainViewData>
  );
};

MainViewData.propTypes = {
  isShowFilter: PropTypes.bool,
  toggleShowFilter: PropTypes.func,
  changeStatusFetch: PropTypes.func,
  isFetch: PropTypes.bool,
};

MainViewData.defaultProps = {
  isShowFilter: false,
  toggleShowFilter: () => {},
  changeStatusFetch: () => {},
  isFetch: false,
};

export default MainViewData;
