import React, { useRef, useMemo } from "react";
import { useCheckOwnerModel } from "SRC/hooks/Model";
import { useScrollInfinity } from "SRC/hooks/UI";
import { DetailModelWrapper } from "./styled";
import MainContentView from "./components/MainContentModel";
import InfoModelView from "./components/InfoModel";

const DetailModel = () => {
  const refDetail = useRef();
  const [changeStatusFetch, handleScroll, { isFetch }] = useScrollInfinity(
    refDetail
  );

  const boolFetch = useMemo(() => isFetch, [isFetch]);
  const [checkOwnerModel] = useCheckOwnerModel();

  return (
    <DetailModelWrapper ref={refDetail} onScroll={handleScroll}>
      <MainContentView
        changeStatusFetch={(e) => changeStatusFetch(e)}
        isFetch={boolFetch}
        checkOwnerModel={checkOwnerModel}
      />
      <InfoModelView />
    </DetailModelWrapper>
  );
};

export default DetailModel;
