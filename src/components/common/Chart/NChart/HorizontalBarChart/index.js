import { Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React, { useMemo, memo } from 'react';

import { WrapperHorizontalBarChart, ItemHorizontalCss } from './styled';

const HorizontalBarChart = (props) => {
  const { dataChart, justifyContent, sumTags } = props;

  const maxCountMemo = useMemo(() => sumTags, [sumTags]);
  return (
    <WrapperHorizontalBarChart justifyContent={justifyContent}>
      {dataChart.map((e) => {
        return <ItemHorizontalChart key={e.category} {...e} maxCount={maxCountMemo} />;
      })}
    </WrapperHorizontalBarChart>
  );
};

export default HorizontalBarChart;

export const ItemHorizontalChart = memo((props) => {
  const { category, num, maxCount } = props;
  const percentNum = ((num * 100) / maxCount).toFixed(1);
  return (
    <ItemHorizontalCss percentNum={percentNum}>
      <Tooltip placement="leftBottom" title={category}>
        <div className="label-item">{category}</div>
      </Tooltip>
      <div className="progress-item">
        <div className="process" />
      </div>
      <div className="value-item">{percentNum}%</div>
    </ItemHorizontalCss>
  );
});

// ============================================ DEFAULT PROPS

HorizontalBarChart.propTypes = {
  dataChart: PropTypes.instanceOf(Array),
  justifyContent: PropTypes.string,
  sumTags: PropTypes.number,
};
HorizontalBarChart.defaultProps = {
  dataChart: [],
  justifyContent: 'initial',
  sumTags: 0,
};

ItemHorizontalChart.propTypes = {
  category: PropTypes.string,
  maxCount: PropTypes.number,
  num: PropTypes.number,
};
ItemHorizontalChart.defaultProps = {
  category: '',
  maxCount: 0,
  num: 0,
};
