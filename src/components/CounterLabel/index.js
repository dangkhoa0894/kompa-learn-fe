import PropTypes from "prop-types";
import React, { useState, useMemo, useEffect } from "react";
import ModalView from "SRC/components/common/Modal";
import BarChart from "SRC/components/common/Chart/Am/BarChart";
import HorizontalBarChart from "SRC/components/common/Chart/NChart/HorizontalBarChart";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { Tooltip, Typography } from "antd";
import { CounterLabelContainer, BarChartCss } from "./styled";

const CounterLabel = (props) => {
  const { counterLabel, minHeight, numberRow, fontSizeTitle } = props;
  const [isOpenChart, setIsOpenChart] = useState(false);
  const [isDescSort, setIsDescSort] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const toggleOpenChart = () => {
    setIsOpenChart(!isOpenChart);
  };

  const handleDataChart = (data, isDesc) => {
    let tempData = [];
    if (counterLabel) {
      tempData = Object.keys(data).map((key) => {
        return {
          category: key,
          num: data[key],
        };
      });
      tempData.sort((a, b) => (a.num > b.num ? -1 : 1));
      if (isDesc) {
        tempData.reverse();
      }
    }
    return tempData;
  };

  const doSortDataChart = () => {
    setIsDescSort((x) => !x);
    const tempData = [...dataChart];
    tempData.sort((a, b) => (a.num < b.num ? -1 : 1));
    if (isDescSort) {
      tempData.reverse();
    }
    setDataChart(tempData);
  };

  useEffect(() => {
    if (counterLabel) {
      setDataChart(handleDataChart(counterLabel));
    }
  }, [counterLabel]);

  const sumTags = useMemo(() =>
    counterLabel && Object.values(counterLabel).length > 0
      ? Object.values(counterLabel).reduce((sum, currentValue) => {
          const tempSum = sum + currentValue;
          return tempSum;
        })
      : 0
  );

  const dataChartMemo = useMemo(() => dataChart, [dataChart]);
  return (
    <CounterLabelContainer minHeight={minHeight} fontSizeTitle={fontSizeTitle}>
      {/* <div className="counter-tag"> */}
      <Typography.Text className="counter-tag">
        <Tooltip title="Total Labels" placement="right" color="#108ee9">
          {counterLabel &&
            Object.values(counterLabel)
              .length.toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </Tooltip>
      </Typography.Text>
      <div className="bar-chart-mini">
        <div
          className="sort-bar-chart"
          onClick={doSortDataChart}
          role="presentation"
        >
          Sort by (%) &nbsp; {!isDescSort ? <FaCaretUp /> : <FaCaretDown />}
        </div>
        <HorizontalBarChart
          justifyContent="space-around"
          dataChart={dataChartMemo.slice(0, numberRow)}
          sumTags={sumTags}
        />
        <div
          className="show-more-chart"
          onClick={toggleOpenChart}
          role="presentation"
        >
          Show more
        </div>
      </div>
      <ModalView
        isOpen={isOpenChart}
        content={
          // eslint-disable-next-line react/jsx-wrap-multilines
          <BarChartCss totalCategories={dataChart?.length || 0}>
            {counterLabel && (
              <BarChart
                dataChart={[...dataChart].reverse()}
                id="chart_counter_label"
              />
            )}
          </BarChartCss>
        }
        onCancel={toggleOpenChart}
        destroyOnClose
        showFooter={false}
        width="fit-content"
        centered
        maskClosable
      />
    </CounterLabelContainer>
  );
};

CounterLabel.propTypes = {
  counterLabel: PropTypes.instanceOf(Object),
  minHeight: PropTypes.number,
  numberRow: PropTypes.number,
  fontSizeTitle: PropTypes.number,
};

CounterLabel.defaultProps = {
  counterLabel: {},
  minHeight: 0,
  numberRow: 4,
  fontSizeTitle: 3.8,
};

export default CounterLabel;
