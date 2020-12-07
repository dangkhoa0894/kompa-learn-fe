import styled from 'styled-components';

export const ContainerVersion = styled.div`
  display: flex;
  width: 100%;
  /* flex: 1; */
  flex-direction: column;
  height: 100%;
  /* align-items: center; */
  /* justify-content: center; */
  background: white;
  height: fit-content;
  border-radius: 10px;
  .header-version {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 20px 20px 0px 0px;
    align-items: center;
    .title-version {
      width: 100%;
      font-size: 1.3rem;
    }
    .view-all-version {
      white-space: nowrap;
      cursor: pointer;
      :hover {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
      }
    }
  }
  .body-version {
    padding: 20px;
    /* border: 1px solid gray; */
    border-radius: 10px;
    margin: 30px;
    box-shadow: 1px 2px 9px 0px #dadada;
  }
`;

export const ItemVersion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
  margin: 5px;
  box-shadow: 0 0 2px 0 #9e9e9e;
  border-radius: 10px;
  width: 460px;
  .info {
    padding-right: 10px;
    flex: 1;
  }
  .action {
    width: 135px;
    padding-left: 10px;
  }
`;

export const TemplateInfoCss = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 0px;

  justify-content: space-between;
  border-bottom: 1px solid #f3f3f3;
  .label-template-version {
    font-size: 1rem;
  }
  .content-template-version {
    padding-left: 10px;
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
  }
`;
