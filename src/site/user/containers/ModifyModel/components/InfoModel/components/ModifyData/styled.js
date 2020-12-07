import styled from 'styled-components';

export const ModifyDataWrapper = styled.div`
  width: 100%;
  table {
    border-collapse: collapse;
    width: 100%;
    th,
    td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    overflow: auto;
    th:nth-child(1) {
      width: ${({ colSpan }) => (colSpan === 'true' ? '90%' : '30%')};
    }

    th:nth-child(3) {
      width: 10%;
    }
    .no-content-modify {
      text-align: center;
      color: gray;
      text-transform: capitalize;
    }
  }
`;
