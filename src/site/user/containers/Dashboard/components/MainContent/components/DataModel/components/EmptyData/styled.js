// EMPTy DATA
import styled from 'styled-components';

export const EmptyDataStyled = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
  width: 100%;
  flex-grow: ${({ isMoreTemplate }) => (isMoreTemplate ? 0 : 5)};
  border-radius: 15px;
  padding: 15px;
  padding-bottom: 0px;
  height: 0px;
  overflow: hidden;
  align-items: center;
  .empty-image {
    width: 100%;
    height: 53%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
      width: auto;
    }
  }
  .empty-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .content-title {
      color: black;
      padding: 7px 0px;
    }
    .content-sub {
      color: ${({ theme: { colors } }) => colors.gray.gray_7};
      padding: 7px 0px;
      width: 240px;
      text-align: center;
      padding-bottom: 10px;
    }
  }
`;
