import PropTypes from 'prop-types';
import React, { memo, useCallback, useMemo, useState } from 'react';

import { WrapperMainContent, BodyDashBoard } from './styled';
import TopContentDashBoard from './components/TopContent';
import TemplateModel from './components/TemplateModel';
import ModelUser from './components/DataModel';

const MainContent = (props) => {
  const { isShowDetail, toggleShowDetail, showDetail } = props;
  const [isMoreTemplate, setIsMoreTemplate] = useState(false);

  const setOpenMore = () => {
    setIsMoreTemplate(!isMoreTemplate);
  };

  const isMoreTemplateMemo = useMemo(() => isMoreTemplate, [isMoreTemplate]);
  const toggleShowDetailMemo = useCallback((e) => toggleShowDetail(e));
  const showDetailMemo = useCallback((e) => showDetail(e));

  return (
    <WrapperMainContent isMoreTemplate={isMoreTemplate}>
      <TopContentDashBoard {...props} />
      <BodyDashBoard isShowDetail={isShowDetail}>
        <TemplateModel isMoreTemplate={isMoreTemplate} openMoreTemplate={setOpenMore} />
        <ModelUser
          isMoreTemplate={isMoreTemplateMemo}
          toggleShowDetail={toggleShowDetailMemo}
          isShowDetail={isShowDetail}
          showDetail={showDetailMemo}
        />
      </BodyDashBoard>
    </WrapperMainContent>
  );
};

MainContent.propTypes = {
  isShowDetail: PropTypes.bool,
  toggleShowDetail: PropTypes.func,
  showDetail: PropTypes.func,
};

MainContent.defaultProps = {
  isShowDetail: false,
  toggleShowDetail: () => {},
  showDetail: () => {},
};

export default memo(MainContent);
