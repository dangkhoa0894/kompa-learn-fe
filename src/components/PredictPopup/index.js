import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import { RiCloseFill } from "react-icons/ri";
import { Input, Button, Typography } from "antd";
import { useMutation } from "@apollo/client";
import { PREDICT_CONTENT } from "SRC/graphql/Model/Mutations";
import { useParams } from "react-router-dom";
import LoadingText from "SRC/components/common/LoadingText";
import ItemSingle from "SRC/components/common/ItemSingle";
import { useGetDetailModel } from "SRC/hooks/Model";
import ItemMultiple from "SRC/components/common/ItemMultiple";
import { PredictPopupContainer } from "./styled";

const PredictPopup = (props) => {
  const { togglePredict } = props;
  const [doPredict, { loading }] = useMutation(PREDICT_CONTENT);
  const { modelId } = useParams();
  const refContent = useRef(null);
  const [dataPredict, setDataPredict] = useState([]);
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
  });

  const doPredictContent = async () => {
    const res = await doPredict({
      variables: {
        dataInput: {
          modelId: parseInt(modelId, 10),
          content: refContent.current.state.value,
        },
      },
    });
    setDataPredict(res.data.predictAContent.data);
  };

  return (
    <PredictPopupContainer animation={dataPredict.length > 0}>
      <div className="header-predict">
        <Typography.Text>Try with your text</Typography.Text>
        <RiCloseFill onClick={togglePredict} />
      </div>
      <div className="contain">
        <Input.TextArea
          //   rows={4}
          autoSize={{ minRows: 5, maxRows: 20 }}
          ref={refContent}
          className="input-textarea"
          placeholder="Enter your topic"
        />
      </div>
      <div className="button-predict">
        <Button
          type="primary"
          className="btn-run"
          onClick={!loading && doPredictContent}
        >
          {loading ? <LoadingText /> : "Run"}
        </Button>
      </div>
      <div className="res-predict">
        {dataPredict.map((item, index) => {
          if (infoModel.typeModel !== 3) {
            return (
              <ItemSingle
                highlight={index === 0}
                // eslint-disable-next-line react/no-array-index-key
                key={`${index}single`}
                {...item}
                mode={infoModel.typeModel === 2 ? "sentiment" : "label"}
              />
            );
          }
          // eslint-disable-next-line react/no-array-index-key
          return <ItemMultiple key={`${index}single`} {...item} />;
        })}
      </div>
    </PredictPopupContainer>
  );
};

PredictPopup.propTypes = {
  togglePredict: PropTypes.func,
};
PredictPopup.defaultProps = {
  togglePredict: () => {},
};

export default PredictPopup;
