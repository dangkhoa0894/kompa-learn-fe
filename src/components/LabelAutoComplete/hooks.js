import { useCallback, useEffect, useState } from "react";
import { contentModifyModel } from "SRC/graphql/Cache/initialCache";

export const useModifyLabel = (props) => {
  const { dataModel, content, isNew, contentActive } = props;
  const [selectItem, setSelectItem] = useState([]);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const removeItem = () => {
    if (!isNew) {
      const tempCacheData = contentModifyModel();
      const tempModify = tempCacheData.data[contentActive.id];
      const tempNoContent = tempModify.filter((item) => item.id !== content.id);
      const temp = {
        ...tempCacheData.data,
        [`${contentActive.id}`]: [...tempNoContent],
      };
      contentModifyModel({
        ...tempCacheData,
        data: { ...temp },
      });
    }
  };

  const handleUpdateCache = useCallback((tempData = null) => {
    const tempCacheData = contentModifyModel();
    const itemActive = tempData || selectItem;
    if (itemActive.length <= 0) {
      if (!isNew) {
        removeItem();
      }
    } else if (isNew) {
      let tempProps = {};
      if (tempCacheData.data[content.id]) {
        // hasModifyContent
        const tempModify = tempCacheData.data[content.id];
        tempProps = {
          [`${content.id}`]: [
            ...tempModify,
            {
              id: new Date().getTime(),
              label: {
                id: parseInt(itemActive[0].key, 10),
                content: itemActive[0].value,
              },
            },
          ],
        };
      } else {
        // noContent
        tempProps = {
          [`${content.id}`]: [
            {
              id: new Date().getTime(),
              //   __typename: _TYPENAME.CACHE_MODIFY_MODEL,
              label: {
                id: parseInt(itemActive[0].key, 10),
                content: itemActive[0].value,
              },
            },
          ],
        };
      }

      contentModifyModel({
        ...tempCacheData,
        data: { ...tempCacheData.data, ...tempProps },
      });
    } else {
      // Modify label
      const tempModify = tempCacheData.data[contentActive.id];
      const newContent = tempModify.map((item) => {
        if (item.id === content.id) {
          return {
            ...item,
            label: {
              id: parseInt(itemActive[0].key, 10),
              content: itemActive[0].value,
            },
          };
        }
        return item;
      });
      const temp = {
        ...tempCacheData.data,
        [`${contentActive.id}`]: newContent,
      };
      contentModifyModel({
        ...tempCacheData,
        data: { ...temp },
      });
    }
    if (isNew) {
      setSelectItem([]);
    }
  });

  useEffect(() => {
    if (!isNew && content?.label?.id) {
      setSelectItem([{ key: content.label.id, value: content.label.content }]);
    } else {
      setSelectItem([]);
    }
    return () => {};
  }, [props]);

  const handleChangeTags = (evt, data) => {
    const tempData = [...data];
    if (data.length > 1) {
      tempData.shift();
    }
    setSelectItem(tempData);

    if (evt.length > 0) {
      setIsOpenDropdown(false);
    }
    handleUpdateCache(tempData);
  };

  const onDropdownVisible = (e) => {
    setIsOpenDropdown(e);
  };

  return [
    { selectItem, dataModel, isOpenDropdown },
    handleUpdateCache,
    useCallback((evt, data) => handleChangeTags(evt, data), []),
    useCallback(() => removeItem(), []),
    useCallback((e) => onDropdownVisible(e), []),
  ];
};
