import styled from 'styled-components';

export const ContainSolution = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px;
  width: 100%;
  /* flex-direction: row; */
  .contain-block {
    width: 100%;
  }
`;

export const BlockSol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 2px 0 rgba(119, 135, 147, 0.1), 0 10px 30px 0 rgba(119, 135, 147, 0.1);
    .arrow {
      margin-left: 25px !important;
    }
  }
  .header-sol {
    display: flex;
    align-items: center;
    .header-avatar {
      img {
        height: 50px;
        width: 50px;
      }
    }
    .header-title {
      padding-left: 20px;
    }
  }
  .body-sol {
    padding: 20px 0px 0px;

    .body-tags {
      display: flex;
      padding: 20px 0px;
      flex-wrap: wrap;
    }
  }

  .footer-sol {
    width: 100%;
    .footer-button {
      padding: 5px 10px;
      text-transform: capitalize;
      color: ${(props) => props.color[0]};
      font-weight: bold;
      width: fit-content;
      display: flex;
      align-items: center;

      .arrow {
        margin-left: 10px;
        color: ${(props) => props.color[0]};
        transition: 0.2s;
      }
    }
  }
`;

export const ContainItemTag = styled.div`
  width: fit-content;
  white-space: nowrap;
  height: fit-content;
  font-weight: 500;
  padding: 3px 10px;
  background: ${(props) => props.color[1]};
  color: ${(props) => props.color[0]};
  margin-right: 5px;
  margin-bottom: 5px;
`;
