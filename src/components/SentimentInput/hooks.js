import React, { useCallback, useState, useEffect } from "react";
import { FaGrinWink, FaFrown } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import { contentModifyModel } from "SRC/graphql/Cache/initialCache";

export const useModifySentiment = (props) => {
  const { dataModel, modifyData, content, isNew, contentActive } = props;
  const [sentimentData, setSentimentData] = useState([]);
  const [sentimentActive, setSentimentActive] = useState({});

  const updateSentiment = (data) => {
    const tempDataCache = contentModifyModel();
    setSentimentActive(data);
    if (!isNew) {
      if (tempDataCache.data[contentActive?.id]) {
        const temp = tempDataCache.data[contentActive?.id];
        const newSentiment = temp.map((item) => {
          if (item.id === content.id) {
            return {
              ...item,
              sentiment: {
                id: data.id,
              },
            };
          }
          return item;
        });
        const tempProps = {
          [`${contentActive?.id}`]: newSentiment,
        };
        contentModifyModel({
          ...tempDataCache,
          data: { ...tempDataCache.data, ...tempProps },
        });
      }
    } else {
      let tempProps = {};
      if (!tempDataCache.data[content.id]) {
        tempProps = {
          [`${content.id}`]: [
            {
              id: new Date().getTime(),
              sentiment: {
                id: data.id,
              },
            },
          ],
        };
      } else {
        tempProps = {
          [`${content.id}`]: [
            ...tempDataCache.data[content.id],
            {
              id: new Date().getTime(),
              sentiment: {
                id: data.id,
              },
            },
          ],
        };
      }
      contentModifyModel({
        ...tempDataCache,
        data: { ...tempDataCache.data, ...tempProps },
      });
    }
  };

  useEffect(() => {
    if (modifyData[contentActive?.id] && sentimentData.length > 0) {
      const tempDataCache = modifyData[contentActive?.id];
      const modifyItem = tempDataCache.find((e) => e.id === content.id);
      if (modifyItem?.sentiment?.id) {
        setSentimentActive(
          sentimentData.find((e) => e.id === modifyItem.sentiment.id)
        );
      }
    } else {
      setSentimentActive({});
    }
  }, [modifyData, sentimentData]);

  useEffect(() => {
    if (dataModel?.sentiment) {
      const tempSentiment = dataModel?.sentiment
        .filter(
          (e) =>
            e.sentimentName === "positive" ||
            e.sentimentName === "negative" ||
            e.sentimentName === "neutral"
        )
        .map((item) => {
          switch (item.sentimentName) {
            case "positive":
              return {
                id: item.id,
                icon: <FaGrinWink />,
                class: "positive",
                index: 1,
              };
            case "negative":
              return {
                id: item.id,
                icon: <FaFrown />,
                class: "negative",
                index: 2,
              };
            case "neutral":
              return {
                id: item.id,
                icon: <BsChatDots />,
                class: "neutral",
                index: 3,
              };
            default:
              return {
                id: item.id,
                icon: <FaGrinWink />,
                class: "positive",
                index: 1,
              };
          }
        });
      setSentimentData(tempSentiment.sort((a, b) => a.index - b.index));
    }
  }, [dataModel]);
  return [
    { sentimentData, sentimentActive },
    useCallback((e) => updateSentiment(e)),
  ];
};
