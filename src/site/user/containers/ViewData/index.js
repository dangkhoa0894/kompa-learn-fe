import { useQuery } from "@apollo/client";
import { GET_FILTER_DATA_MODEL } from "SRC/graphql/Model/Query";
import { useScrollInfinity } from "SRC/hooks/UI";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import FilterData from "./components/FilterData";
import MainViewData from "./components/MainViewData";
import { WrapperViewData } from "./styled";

const ViewData = () => {
  const [isShowFilter, setIsShowFilter] = useState(false);
  const refDetail = useRef();
  const [changeStatusFetch, handleScroll, { isFetch }] = useScrollInfinity(
    refDetail
  );
  const { data: dataFilter } = useQuery(GET_FILTER_DATA_MODEL);

  useEffect(() => {
    refDetail.current.scrollTo(0, 0);
  }, [dataFilter]);

  const toggleShowFilter = useCallback(() => {
    setIsShowFilter((x) => !x);
  }, []);

  const showFilter = useCallback((e) => {
    setIsShowFilter(e);
  }, []);

  const isShowFilterMemo = useMemo(() => isShowFilter, [isShowFilter]);
  const boolFetch = useMemo(() => isFetch, [isFetch]);

  return (
    <WrapperViewData
      ref={refDetail}
      onScroll={handleScroll}
      className="scrollbar-custom-page"
    >
      <FilterData
        toggleShowFilter={showFilter}
        isShowFilter={isShowFilterMemo}
      />

      <MainViewData
        toggleShowFilter={toggleShowFilter}
        showFilter={showFilter}
        isShowFilter={isShowFilterMemo}
        // =====
        changeStatusFetch={(e) => changeStatusFetch(e)}
        isFetch={boolFetch}
      />
    </WrapperViewData>
  );
};

export default ViewData;
