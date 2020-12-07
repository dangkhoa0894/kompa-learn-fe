import styled from 'styled-components';

export const WrapperItemContent = styled.div`
  background: ${({ theme: { colors } }) => colors.white.white_1};
  padding: 35px 25px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
  top: 0;
  left: 0;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  cursor: pointer;
  .item-index {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 60px;
    /* text-align: center; */
    background: #b9b9b9;
    border-top-left-radius: 5px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-bottom-right-radius: 5px;
  }

  .label-item {
    width: fit-content;
    height: 30px;
    /* border: 1px solid gray; */
    padding: 0px 17px;
    line-height: 27px;
    border-radius: 5px;
    margin-top: 15px;
    background: ${({ theme: { colors } }) => colors.blue.blue_1};
    color: ${({ theme: { colors } }) => colors.white.white_1};
  }
  .item-content {
    text-align: justify;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 500;
    margin-bottom: 10px;
    &.show {
      -webkit-line-clamp: initial;
    }
  }
  .more-content {
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-end;

    .button-more {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.blue.blue_6};
      border-radius: 5px;
      padding: 2px 5px;
      cursor: pointer;
      color: ${({ theme: { colors } }) => colors.blue.blue_6};
    }
  }
`;
