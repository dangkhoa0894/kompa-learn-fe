import React, { useMemo, memo } from "react";
import PropTypes from "prop-types";
import AmPieChart from "SRC/components/common/Chart/Am/PieChart";
import CounterLabel from "SRC/components/CounterLabel";
import Loading from "SRC/site/user/containers/Loading/LoadingView";
import { TemplateCss } from "./styled";

const AnalysisTagView = (props) => {
  const {
    dataModel: { counterLabel, typeModel },
    minHeight,
    numberRow,
    fontSizeTitle,
  } = props;

  const counterCache = useMemo(() => counterLabel && JSON.parse(counterLabel), [
    counterLabel,
  ]);

  const renderChart = () => {
    switch (typeModel) {
      case 1:
      case 3:
        return (
          <CounterLabel
            counterLabel={counterCache}
            minHeight={minHeight}
            numberRow={numberRow}
            fontSizeTitle={fontSizeTitle}
          />
        );
      case 2:
        return <AmPieChart counterLabel={counterCache} />;

      default:
        return (
          <TemplateCss>
            <Loading mode="panel" />
          </TemplateCss>
        );
    }
  };
  return renderChart();
};

export default memo(AnalysisTagView);

AnalysisTagView.propTypes = {
  dataModel: PropTypes.instanceOf(Object),
  minHeight: PropTypes.number,
  numberRow: PropTypes.number,
  fontSizeTitle: PropTypes.number,
};
AnalysisTagView.defaultProps = {
  dataModel: {},
  minHeight: 0,
  numberRow: 4,
  fontSizeTitle: 3.8,
};
