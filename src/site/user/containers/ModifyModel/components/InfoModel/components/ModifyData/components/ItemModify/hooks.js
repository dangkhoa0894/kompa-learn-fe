import { contentModifyModel } from "SRC/graphql/Cache/initialCache";
import { useCallback } from "react";

export const useModifyModel = (props) => {
  const { content, isNew, contentActive } = props;

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

  return [useCallback(() => removeItem())];
};
