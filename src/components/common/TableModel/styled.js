import styled from 'styled-components';

export const WrapperTable = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  .table {
    overflow: auto;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-collapse: collapse;
    min-width: 100%;
    grid-row-gap: 10px;
    grid-template-columns: ${({ columns }) => {
      let a = '';
      columns.forEach((item) => {
        a += `minmax(${item.minWidth || 150}px, ${`${
          item.maxWidth ? `${item.maxWidth}px` : '1.5fr'
        }`})\n`;
      });
      return a;
    }};
    grid-template-rows: 60px repeat(auto-fill, 80px);

    display: grid;

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #d7d7d7;
    }
  }
`;
