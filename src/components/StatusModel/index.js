import PropTypes from "prop-types";
import React, { useState, useEffect, memo } from "react";
import { STEP_CREATE_MODEL, ERROR_CODE, _TYPENAME } from "SRC/resource/string";
import { useHistory } from "react-router-dom";
import { getUnixTime } from "date-fns";
import { Tooltip, Modal, notification } from "antd";
import { TRAIN_DATA } from "SRC/graphql/Model/Mutations";
import { useMutation } from "@apollo/client";
import LoadingText from "SRC/components/common/LoadingText";
import { StatusContainer, ProcessCss, StatusCss } from "./styled";

const StatusModel = (props) => {
  const { process, id, timeTrain, modelTrainSuccess, ...other } = props;
  const history = useHistory();
  const [doTrain, { loading }] = useMutation(TRAIN_DATA);

  const goToContinue = (e) => {
    if ((other.typeData === 2 || other.score.length > 0) && process === 5) {
      e.stopPropagation();
      Modal.info({
        title: "Message Train",
        content: (
          <div>
            <p>
              Do you want train &nbsp;
              {other.modelName}
            </p>
          </div>
        ),
        okCancel() {},
        okText: loading ? <LoadingText title="Loading..." /> : "Train model",
        onOk() {
          if (!loading) {
            doTrain({
              variables: {
                dataInput: {
                  modelId: id,
                },
              },
              update: (cache, { data: { trainModel } }) => {
                if (trainModel.statusCode === ERROR_CODE.SUCCESS) {
                  try {
                    cache.modify({
                      id: `${_TYPENAME.RES_MODEL}:${id}`,
                      fields: {
                        totalTimes() {
                          return trainModel.data.totalTimes;
                        },
                        totalCategories() {
                          return trainModel.data.totalCategories;
                        },
                        process() {
                          return trainModel.data.process;
                        },
                      },
                    });
                    notification.success({
                      message: "Message",
                      description: "In process train!",
                    });
                  } catch (err) {
                    notification.error({
                      message: "Message error ",
                      description: err.message,
                    });
                  }
                } else {
                  notification.error({
                    message: "Message error ",
                    description: trainModel.message,
                  });
                }
              },
            });
          }
        },
      });
      return;
    }
    if (STEP_CREATE_MODEL[process]?.href) {
      e.stopPropagation();

      history.push(`/model/setup/${STEP_CREATE_MODEL[process].href}/${id}`);
    }
  };

  let showTitle = <StatusItem process={process} />;
  if (process === 6 || process === 7) {
    showTitle = (
      <ProcessTrain
        onClick={(e) => goToContinue(e)}
        data={{ process, id, timeTrain, modelTrainSuccess, ...other }}
      />
    );
  }

  return (
    <StatusContainer onClick={goToContinue}>
      {showTitle || "Chưa cập nhật"}
    </StatusContainer>
  );
};

StatusModel.propTypes = {
  id: PropTypes.number,
  modelTrainSuccess: PropTypes.instanceOf(Object),
  process: PropTypes.number,
  timeTrain: PropTypes.number,
};

StatusModel.defaultProps = {
  id: 0,
  modelTrainSuccess: {},
  process: 1,
  timeTrain: 0,
};

export default memo(StatusModel);

const ProcessTrain = (props) => {
  const {
    data: { id, timeTrain, process, totalTimes, modelTrainSuccess },
  } = props;
  const [percent, setPercent] = useState(process === 7 ? 100 : 0);
  const [isDone, setIsDone] = useState(process === 7);

  useEffect(() => {
    let interval2 = null;
    if (modelTrainSuccess?.id === id) {
      setIsDone(true);
      interval2 = setInterval(() => {
        setPercent(percent + 10);
      }, [500]);
      if (percent >= 100) {
        setPercent(100);
        clearInterval(interval2);
      }
    }
    return () => {
      clearInterval(interval2);
    };
  }, [modelTrainSuccess, percent]);

  useEffect(() => {
    let interval = null;
    if (timeTrain && process !== 7 && percent === 0) {
      interval = setInterval(() => {
        const time = timeTrain - getUnixTime(new Date());
        const tempPercent = (time * 100) / totalTimes;
        if (tempPercent <= 20) {
          setPercent(90);
          clearInterval(interval);
          return;
        }
        setPercent(parseInt(100 - tempPercent, 10));
      }, 1000);
    }
    if (isDone) {
      clearInterval(interval);
    }
    return () => {
      return clearInterval(interval);
    };
  }, [isDone]);

  return isDone && percent === 100 ? (
    <StatusItem process={process} />
  ) : (
    <Tooltip placement="topRight" title={STEP_CREATE_MODEL[process]?.label}>
      <ProcessCss percent={percent}>
        <div className="bar positive" />
        <div className="bar negative" />
        <div className="percent-train"> {percent} %</div>
      </ProcessCss>
    </Tooltip>
  );
};

ProcessTrain.propTypes = {
  data: PropTypes.instanceOf(Object),
};

ProcessTrain.defaultProps = {
  data: {},
};

const StatusItem = (props) => {
  const { process } = props;
  let tempClass = "";
  switch (process) {
    // case 1:
    //   tempClass = 'configuring';
    //   break;
    case 2:
      tempClass = "pending";
      break;
    case 1:
    case 3:
    case 4:
      tempClass = "inProgress";
      break;
    case 5:
      tempClass = "train";
      break;
    case 7:
      tempClass = "completed";
      break;
    default:
      tempClass = "error";
      break;
  }
  return (
    <StatusCss>
      <Tooltip placement="topRight" title={STEP_CREATE_MODEL[process]?.label}>
        <div className={`status ${tempClass}`}>
          {STEP_CREATE_MODEL[process]?.status}
        </div>
      </Tooltip>
    </StatusCss>
  );
};

StatusItem.propTypes = {
  process: PropTypes.number,
};

StatusItem.defaultProps = {
  process: 1,
};
