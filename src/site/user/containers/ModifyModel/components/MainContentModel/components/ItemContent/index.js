import PropTypes from "prop-types";
import React, { useState, memo, useCallback, useMemo, useRef } from "react";
import { Typography, Divider } from "antd";
import ItemSingle from "SRC/components/common/ItemSingle";
import ItemMultiple from "SRC/components/common/ItemMultiple";
import { RiEditLine } from "react-icons/ri";
import { contentModifyModel } from "SRC/graphql/Cache/initialCache";

import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import { useIntersectionObserverLazyContent } from "SRC/hooks/UI";
import { ItemContentCss, MoreTagsCss } from "./styled";

const ItemContent = (props) => {
  const {
    content,
    resPredict,
    dataModel,
    index,
    isActive,
    modifyData,
    checkOwnerModel,
  } = props;
  const refItemContent = useRef(null);
  const [isShow, setIsShow] = useState(false);
  const [isShowTag, setIsShowTag] = useState(false);
  useIntersectionObserverLazyContent(refItemContent);

  const isShowTagMemo = useMemo(() => isShowTag, [isShowTag]);
  const toggleShowTagsCallback = useCallback(() => setIsShowTag((x) => !x));

  const renderResPredict = () => {
    switch (dataModel.typeModel) {
      case 1:
        // eslint-disable-next-line no-case-declarations
        let tempData = [...resPredict].sort(
          (a, b) => parseFloat(b.confidence) - parseFloat(a.confidence)
        );
        // eslint-disable-next-line no-case-declarations
        const tempData2 = tempData.filter(
          (item) =>
            (item.confidence * 100).toFixed(2) > 0 && item.confidence !== 0
        );
        tempData = isShowTag ? tempData2 : tempData2.slice(0, 6);
        return (
          <>
            {tempData.map((item, index2) => {
              return (
                <ItemSingle
                  highlight={index2 === 0}
                  // eslint-disable-next-line react/no-array-index-key
                  key={item.label + index2}
                  {...item}
                  mode="label"
                />
              );
            })}
            {tempData2.length > 6 && (
              <MoreTags
                toggleShowTagsCallback={toggleShowTagsCallback}
                isShowTag={isShowTagMemo}
              />
            )}
          </>
        );
      case 2:
        return resPredict.map((item, index2) => {
          // eslint-disable-next-line react/no-array-index-key
          return (
            <ItemSingle key={item.label + index2} {...item} mode="sentiment" />
          );
        });
      case 3:
        return resPredict.map((item, index2) => {
          // eslint-disable-next-line react/no-array-index-key
          return <ItemMultiple key={item.child_label + index2} {...item} />;
        });
      default:
        return <div />;
    }
  };

  const renderModifyContent = () => {
    switch (dataModel.typeModel) {
      case 1:
        return (
          modifyData &&
          modifyData.map((item, index2) => {
            const temp = {
              label: "",
            };
            if (item?.label) {
              temp.label = item.label.content;
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <ItemSingle
                key={`${temp.label + index2}-modify-label`}
                {...temp}
                mode="label"
                viewConfidence={false}
              />
            );
          })
        );
      case 2:
        return (
          modifyData &&
          modifyData.map((item, index2) => {
            const temp = {
              label: "",
            };
            if (item?.sentiment) {
              const tempSentiment = dataModel.sentiment
                .filter(
                  (e) =>
                    e.sentimentName === "positive" ||
                    e.sentimentName === "negative" ||
                    e.sentimentName === "neutral"
                )
                .find((e2) => e2.id === item.sentiment.id);
              temp.label = tempSentiment.sentimentName || "";
            }
            return (
              <ItemSingle
                // eslint-disable-next-line react/no-array-index-key
                key={`${temp.label + index2}-modify-sentiment`}
                {...temp}
                mode="sentiment"
                viewConfidence={false}
              />
            );
          })
        );
      case 3:
        return (
          modifyData &&
          modifyData.map((item, index2) => {
            const temp = {
              root_label: "",
              child_label: "",
              sentiment: "",
            };
            if (item?.sentiment) {
              const tempSentiment = dataModel.sentiment
                .filter(
                  (e) =>
                    e.sentimentName === "positive" ||
                    e.sentimentName === "negative" ||
                    e.sentimentName === "neutral"
                )
                .find((e2) => e2.id === item.sentiment.id);
              temp.sentiment = tempSentiment.sentimentName || "";
            }
            let tempItem = "";
            if (item?.label) {
              tempItem = item.label.content;
              const indexS = tempItem.indexOf("#");
              temp.root_label = tempItem.slice(0, indexS);
              temp.child_label = tempItem.slice(indexS + 1, tempItem.length);
            }
            return (
              // eslint-disable-next-line react/no-array-index-key
              <ItemMultiple
                key={tempItem + index2}
                {...temp}
                viewConfidence={false}
              />
            );
          })
        );
      default:
        return <div />;
    }
  };

  const toggleShowContent = () => {
    setIsShow(!isShow);
  };

  const activeContent = () => {
    if (checkOwnerModel(dataModel?.id)) {
      const tempCacheModify = contentModifyModel();
      contentModifyModel({
        ...tempCacheModify,
        contentActive: props,
      });
    }
  };

  return (
    <ItemContentCss
      isActive={isActive}
      onClick={activeContent}
      ref={refItemContent}
    >
      <div className="item-index">{index}</div>
      <div
        className={`item-content ${isShow && "show"}`}
        data-content={content}
        id="lazy-content"
      />
      {content.length >= 430 && (
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
      <div className="item-tags">
        {renderResPredict()}
        {modifyData.length > 0 && (
          <>
            <Divider />
            <div className="content-modify">
              <RiEditLine />
              {renderModifyContent()}
            </div>
          </>
        )}
      </div>
    </ItemContentCss>
  );
};

ItemContent.propTypes = {
  content: PropTypes.string,
  resPredict: PropTypes.instanceOf(Array),
  dataModel: PropTypes.instanceOf(Object),
  index: PropTypes.number,
  isActive: PropTypes.bool,
  checkOwnerModel: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  modifyData: PropTypes.any,
};

ItemContent.defaultProps = {
  content: "",
  resPredict: [],
  dataModel: {},
  modifyData: [],
  index: 0,
  checkOwnerModel: () => {},
  isActive: false,
};

export default memo(ItemContent);

const MoreTags = memo((props) => {
  const { toggleShowTagsCallback, isShowTag } = props;
  return (
    <MoreTagsCss onClick={toggleShowTagsCallback}>
      <div className="icon-more">
        {isShowTag ? <TiChevronLeftOutline /> : <TiChevronRightOutline />}
      </div>
    </MoreTagsCss>
  );
});

MoreTags.propTypes = {
  isShowTag: PropTypes.bool,
  toggleShowTagsCallback: PropTypes.func,
};

MoreTags.defaultProps = {
  isShowTag: false,
  toggleShowTagsCallback: () => {},
};
