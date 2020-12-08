import PropTypes from "prop-types";
import React from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { Typography } from "antd";
import { useHistory } from "react-router-dom";
import ButtonMenu from "SRC/components/common/ButtonMenu";
import { TopContent } from "./styled";

const TopContentDashBoard = (props) => {
  const { toggleShowDetail, isShowDetail } = props;

  const history = useHistory();
  const createModel = () => {
    history.push("/model/create");
  };

  return (
    <TopContent>
      <div className="top-left">
        <ButtonMenu
          onClick={() => toggleShowDetail()}
          onKeyPress={() => toggleShowDetail()}
          isOpen={isShowDetail}
          role="presentation"
        />
        <Typography.Title level={4} className="top-title">
          My Training Dashboard
        </Typography.Title>
      </div>
      <div className="top-right">
        <div className="btn-top btn-search">
          <FaSearch />
        </div>
        <div
          className="btn-top btn-add"
          onClick={createModel}
          onKeyPress={createModel}
          role="presentation"
        >
          <FaPlus />
        </div>
      </div>
    </TopContent>
  );
};

TopContentDashBoard.propTypes = {
  toggleShowDetail: PropTypes.func,
  isShowDetail: PropTypes.bool,
};

TopContentDashBoard.defaultProps = {
  toggleShowDetail: () => {},
  isShowDetail: false,
};

export default TopContentDashBoard;
