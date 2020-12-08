import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { Typography } from "antd";
import ItemMultiple from "SRC/components/common/ItemMultiple";
import ItemSingle from "SRC/components/common/ItemSingle";
import { ItemDataPreview } from "./styled";

const ItemData = (props) => {
  const { content, resPredict, dataModel, id } = props;
  const [isMore, setIsMore] = useState(false);

  const toggleMore = () => {
    setIsMore(!isMore);
    if (isMore) {
      document.getElementById(id).scrollIntoView();
    }
  };
  return (
    <ItemDataPreview>
      <Typography.Text id={id} className={`content-item ${isMore && "show"}`}>
        {content}
      </Typography.Text>
      <div className="button-more">
        {content.length >= 230 && (
          <Typography.Text
            className="more-item"
            onClick={toggleMore}
            onKeyPress={toggleMore}
            role="presentation"
          >
            {isMore ? "Show less" : "Show more"}
          </Typography.Text>
        )}
      </div>
      {dataModel.typeModel === 3 ? (
        <div className="label-item">
          {resPredict &&
            resPredict.length > 0 &&
            resPredict.map((item, index) => {
              if (item.sentiment && dataModel.id) {
                // eslint-disable-next-line react/no-array-index-key
                return (
                  <ItemMultiple
                    key={item.sentiment + index + dataModel.id}
                    {...item}
                  />
                );
              }
              return null;
            })}
        </div>
      ) : (
        <div className="label-item">
          {resPredict &&
            resPredict.length > 0 &&
            resPredict.slice(0, 3).map((item, index) => {
              if (item.label && dataModel.id) {
                return (
                  <ItemSingle
                    // eslint-disable-next-line react/no-array-index-key
                    key={item.label + index + dataModel.id}
                    highlight={index === 0}
                    {...item}
                    mode={dataModel.typeModel === 2 ? "sentiment" : "label"}
                  />
                );
              }
              return null;
            })}
        </div>
      )}
    </ItemDataPreview>
  );
};

ItemData.propTypes = {
  content: PropTypes.string,
  resPredict: PropTypes.instanceOf(Array),
  dataModel: PropTypes.instanceOf(Object),
  id: PropTypes.number,
};
ItemData.defaultProps = {
  resPredict: [],
  content: "",
  dataModel: {},
  id: 0,
};

export default memo(ItemData);
