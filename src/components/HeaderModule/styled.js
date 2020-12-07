import styled from 'styled-components';
import { Row } from 'antd';

const colorButton = '#2193b0';
export const HeaderContainer = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 40px;
  width: 100%;
  height: 80px;
  min-height: 80px;

  .btn-header {
    flex: 1;
    display: flex;
    svg {
      height: 30px;
      width: 30px;
      color: ${colorButton};
      :hover {
        opacity: 0.8;
        cursor: pointer;
      }
    }
  }

  .btn-close {
    justify-content: flex-end;
  }
  .btn-back {
    justify-content: flex-start;
  }
`;

export const ContentCaution = styled.div`
  padding: 30px;
  margin: 25px 0px;
  background: #ffdada;
  border-radius: 5px;
  h4 {
    font-weight: lighter;
    color: red;
  }
`;
