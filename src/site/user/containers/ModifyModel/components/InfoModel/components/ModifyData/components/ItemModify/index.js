import PropTypes from "prop-types";
import React, { memo } from "react";
import { BiMinusCircle } from "react-icons/bi";
import SentimentInput from "SRC/components/SentimentInput";
import LabelAutoComplete from "SRC/components/LabelAutoComplete";
import { ItemModifyCss } from "./styled";
import { useModifyModel } from "./hooks";

const ItemModify = (props) => {
  const { dataModel } = props;
  const [removeItem] = useModifyModel(props);

  return (
    <ItemModifyCss>
      {dataModel.typeModel !== 1 && (
        <td>
          <SentimentInput {...props} />
        </td>
      )}
      {dataModel.typeModel !== 2 && (
        <td>
          <LabelAutoComplete {...props} />
        </td>
      )}
      <td>
        <div
          className="btn-modify-remove"
          onClick={removeItem}
          onKeyPress={removeItem}
          role="presentation"
        >
          <BiMinusCircle />
        </div>
      </td>
    </ItemModifyCss>
  );
};

ItemModify.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
};

ItemModify.defaultProps = {
  dataModel: {},
};

export default memo(ItemModify);
