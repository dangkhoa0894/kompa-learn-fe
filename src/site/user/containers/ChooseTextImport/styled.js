import styled from "styled-components";
import { Row, Col } from "antd";
import media from "SRC/styles/media";

export const WrapperBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  ${media.lg`
  width:1200px;
	`}
`;
export const ContainerTable = styled(Row)`
  margin: 20px 0px;
  width: 100%;
  .table-container {
    width: 100%;
  }
`;

export const TableFooterContainer = styled(Row)`
  color: ${({ theme: { colors } }) => colors.gray.gray_1};
`;
export const ColCustom = styled(Col)`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* border: 1px solid #eaeaea; */
  border-bottom: unset;
  height: 50px;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  box-shadow: 0 10px 20px 0 rgba(119, 135, 147, 0.1);
  .item-value {
    height: 100%;
    label {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0px 15px;
      cursor: pointer;
    }
    :hover {
      background: ${({ theme: { colors } }) => colors.blue.blue_3};
    }
  }
  .active {
    background: ${({ theme: { colors } }) => colors.blue.blue_3};
  }
`;

export const CellTable = styled.div`
  overflow: hidden;
  line-height: 20px;
  height: fit-content;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const ConfirmAlertContent = styled.div`
  > div {
    padding-bottom: 30px !important;
  }
`;
