import { useIntersectionObserverLazyContent } from "SRC/hooks/UI";
import { Typography } from "antd";
import PropTypes from "prop-types";
import React, { memo, useRef, useState } from "react";
import { WrapperItemContent } from "./styled";

const ItemContent = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { labels, labelId, sentimentId, content, index } = props;
  const [isShow, setIsShow] = useState(false);
  const refItemContent = useRef(null);
  useIntersectionObserverLazyContent(refItemContent);

  const toggleShowContent = () => {
    setIsShow((x) => !x);
  };
  const tempContent = !isShow ? content.slice(0, 1100) : content;
  return (
    <WrapperItemContent ref={refItemContent}>
      <div className="item-index">{index}</div>
      <div
        className={`item-content ${isShow && "show"}`}
        data-content={tempContent}
        id="lazy-content"
      />
      {content.length >= 1100 && (
        <div
          className="more-content"
          onClick={toggleShowContent}
          role="presentation"
        >
          <Typography.Text className="button-more">
            {isShow ? "Show less" : "Show more"}
          </Typography.Text>
        </div>
      )}
      <div className="label-item">
        {labels.find((e) => e.id === labelId)?.labelName}
      </div>
    </WrapperItemContent>
  );
};

ItemContent.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  labelId: PropTypes.number,
  labels: PropTypes.instanceOf(Array),
  sentimentId: PropTypes.number,
};

ItemContent.defaultProps = {
  content: "",
  index: 0,
  labelId: 0,
  labels: [],
  sentimentId: 0,
};

export default memo(ItemContent);
