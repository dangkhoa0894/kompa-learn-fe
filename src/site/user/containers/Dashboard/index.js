import React, { useState, useCallback, useMemo } from 'react';
import InfoModel from './components/DetailModel';
import MainContent from './components/MainContent';
import { WrapperDashboard } from './styled';

const DashBoardView = () => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const toggleShowDetail = useCallback(() => {
    setIsShowDetail((x) => !x);
  }, []);

  const showDetail = useCallback((e) => {
    setIsShowDetail(e);
  }, []);

  const isShowDetailMemo = useMemo(() => isShowDetail, [isShowDetail]);

  return (
    <WrapperDashboard>
      <InfoModel toggleShowDetail={showDetail} isShowDetail={isShowDetailMemo} />
      <MainContent
        toggleShowDetail={toggleShowDetail}
        showDetail={showDetail}
        isShowDetail={isShowDetailMemo}
      />
    </WrapperDashboard>
  );
};

export default DashBoardView;
