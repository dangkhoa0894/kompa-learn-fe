import React, { useMemo, memo, useEffect } from "react";
import { useGetDataModifyCache, useGetDetailModel } from "SRC/hooks/Model";
import { useParams } from "react-router-dom";
import { contentModifyModel } from "SRC/graphql/Cache/initialCache";
import { ModifyDataWrapper } from "./styled";
import ItemModify from "./components/ItemModify";

const ModifyDataView = () => {
  const { modelId } = useParams();
  const { data: contentModify } = useGetDataModifyCache();
  const [{ data: dataModel }] = useGetDetailModel({
    model: {
      id: parseInt(modelId, 10),
    },
  });

  const dataModelMemo = useMemo(() => dataModel, [dataModel]);
  const contentActiveMemo = useMemo(() => contentModify.contentActive, [
    contentModify.contentActive,
  ]);

  useEffect(() => {
    contentModifyModel({
      contentActive: "",
      data: "",
    });
  }, []);

  const dataModifyMemo = useMemo(() => contentModify.data, [
    contentModify.data,
  ]);
  const isNew = useMemo(() => true);

  const headerTable = useMemo(() => {
    switch (dataModel.typeModel) {
      case 1:
        return ["Topic"];
      case 2:
        return ["Sentiment"];
      case 3:
        return ["Sentiment", "Topic"];
      default:
        return ["Sentiment", "Topic"];
    }
  }, [dataModel.typeModel]);
  const { contentActive, data } = contentModify;
  return (
    <ModifyDataWrapper colSpan={(dataModel.typeModel !== 3).toString()}>
      <table>
        <thead>
          <tr>
            {headerTable.map((item) => {
              return <th key={item}>{item}</th>;
            })}
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data?.[contentActive?.id] &&
            data?.[contentActive?.id].map((item) => {
              return (
                <ItemModify
                  key={item.id}
                  content={item}
                  dataModel={dataModelMemo}
                  modifyData={dataModifyMemo}
                  contentActive={contentActiveMemo}
                />
              );
            })}
          {contentActive?.id ? (
            (dataModel.typeModel === 3 ||
              !data?.[contentActive?.id] ||
              data?.[contentActive?.id].length <= 0) && (
              <ItemModify
                content={contentActiveMemo}
                isNew={isNew}
                dataModel={dataModelMemo}
                modifyData={dataModifyMemo}
              />
            )
          ) : (
            <tr>
              <td colSpan={3} className="no-content-modify">
                please choose content
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </ModifyDataWrapper>
  );
};

export default memo(ModifyDataView);
