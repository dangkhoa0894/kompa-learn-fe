import React from "react";
import { Select } from "antd";
import TagRender from "SRC/site/user/containers/ModifyModel/components/InfoModel/components/ModifyData/components/TagRender";
import { ContainerLabelAuto } from "./styled";
import { useModifyLabel } from "./hooks";

const LabelAutoComplete = (props) => {
  const [
    { selectItem, dataModel, isOpenDropdown },
    handleUpdateCache,
    handleChangeTags,
    removeItem,
    onDropdownVisible,
  ] = useModifyLabel(props);

  return (
    <ContainerLabelAuto>
      <Select
        mode="multiple"
        onBlur={handleUpdateCache}
        value={selectItem.map((item) => item.value)}
        tagRender={(e) => <TagRender {...e} onRemoveItem={removeItem} />}
        style={{ width: "100%" }}
        placeholder="Tags Mode"
        autoClearSearchValue
        open={isOpenDropdown}
        onChange={handleChangeTags}
        onDropdownVisibleChange={onDropdownVisible}
      >
        {dataModel?.labels?.map((item) => {
          return (
            <Select.Option key={item.id} value={item.labelName}>
              {item.labelName}
            </Select.Option>
          );
        })}
      </Select>
    </ContainerLabelAuto>
  );
};

export default LabelAutoComplete;
