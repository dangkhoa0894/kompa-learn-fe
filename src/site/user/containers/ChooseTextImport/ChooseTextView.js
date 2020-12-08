import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Col, Typography, Checkbox, notification } from "antd";
import Title from "SRC/components/common/Title";
import TableData from "SRC/components/common/Table/TableData";
import { useHistory, useParams } from "react-router-dom";
import { MainButton } from "SRC/styles/mainStyled";
import { ERROR_CODE } from "SRC/resource/string";
import { UPDATE_COLUMN_DATA_RAW } from "SRC/graphql/Model/Mutations";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TEN_COLUMN_DATA } from "SRC/graphql/Model/Query";
import { useGetDetailModel } from "SRC/hooks/Model";
import LoadingText from "SRC/components/common/LoadingText";
import {
  ContainerTable,
  ColCustom,
  TableFooterContainer,
  CellTable,
  WrapperBody,
} from "./styled";

function Files() {
  const history = useHistory();
  const { modelId } = useParams();
  const [dataTable, setDataTable] = useState({
    totalSize: 0,
    data: [],
  });
  const [columns, setColumns] = useState([]);
  const [colSelected, setColSelected] = useState({});
  const { data: dataFile, loading } = useQuery(GET_TEN_COLUMN_DATA, {
    variables: {
      dataInput: {
        modelId: parseInt(modelId, 10),
      },
    },
    fetchPolicy: "network-only",
  });
  const [{ data: infoModel }] = useGetDetailModel({
    model: {
      id: modelId,
    },
    cache: false,
  });
  const [doUpdateColumnForData, { loading: loadingUpdate }] = useMutation(
    UPDATE_COLUMN_DATA_RAW
  );

  const onCheck = (value) => {
    setColSelected(value);
  };

  const onContinue = async () => {
    const dataTrain = {
      dataInput: {
        modelId: parseInt(modelId, 10),
        column: colSelected.key,
      },
    };
    try {
      const res = await doUpdateColumnForData({
        variables: {
          ...dataTrain,
        },
      });
      if (res.data.updateDataModel.statusCode === ERROR_CODE.SUCCESS) {
        notification.success({
          message: "Message",
          description: res.data.updateDataModel.message,
        });
        if (infoModel.typeModel === 2) {
          history.push(`/model/setup/train/${modelId}`);
          return;
        }
        history.push(`/model/setup/defineTag/${modelId}`);
      } else {
        throw new Error(res.data.updateDataModel.message);
      }
    } catch (err) {
      notification.error({
        message: "Message",
        description: err.message,
      });
    }
  };

  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  };

  useEffect(() => {
    if (dataFile && dataFile.getTenColumns.data.tempData && infoModel) {
      const { tempData } = dataFile.getTenColumns.data;
      setDataTable({
        data: tempData,
        totalSize: infoModel.totalRows,
      });

      if (tempData.length > 0) {
        const tempColumns = [];
        // eslint-disable-next-line array-callback-return
        Object.keys(tempData[0]).filter((item) => {
          if (item) {
            tempColumns.push({
              title: capitalize(item),
              dataIndex: item,
              key: item,
              render: (text) => <CellTable key={item}>{text}</CellTable>,
            });
          }
        });
        setColumns(tempColumns);
      }
    }
  }, [dataFile, infoModel]);

  const widthItem = 100 / parseFloat(columns.length);
  return (
    <WrapperBody size="sm">
      <Title
        label="Upload file"
        descriptions="Select the columns with your texts. Multiple selected columns while be contain    "
      >
        Select Texts
      </Title>
      <ContainerTable>
        <ColCustom>
          {columns.map((e) => {
            return (
              <div
                key={e.dataIndex}
                style={{ width: `${widthItem}%` }}
                className={`item-value ${
                  colSelected.key === e.key && "active"
                }`}
              >
                <Checkbox
                  checked={colSelected.key === e.key}
                  onChange={() => onCheck(e)}
                >
                  Use this column
                </Checkbox>
              </div>
            );
          })}
        </ColCustom>
        <Col className="table-container">
          <TableData
            loading={loading}
            columns={columns}
            increment
            data={dataTable.data}
            className="table"
            // eslint-disable-next-line
            footer={() => <FooterTable {...dataTable} />}
          />
        </Col>
      </ContainerTable>
      <MainButton
        type="primary"
        onClick={!loadingUpdate && onContinue}
        disabled={!(typeof colSelected.key === "string")}
      >
        {loadingUpdate ? <LoadingText title="Loading..." /> : "Continue"}
      </MainButton>
    </WrapperBody>
  );
}

export default Files;

const FooterTable = (props) => {
  const { totalSize, data } = props;
  const currentSize = data.length > 9 ? 10 : data.length;
  return (
    <TableFooterContainer justify="center" align="center">
      <Typography.Text>
        Showing &nbsp;
        {currentSize}
        &nbsp; out of &nbsp;
        {totalSize}
        &nbsp; rows
      </Typography.Text>
    </TableFooterContainer>
  );
};

FooterTable.propTypes = {
  data: PropTypes.instanceOf(Array),
  totalSize: PropTypes.number,
};
FooterTable.defaultProps = {
  data: [],
  totalSize: 0,
};
