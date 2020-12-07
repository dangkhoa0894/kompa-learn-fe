import styled from 'styled-components';

export const ItemContentCss = styled.div`
  background: ${({ theme: { colors }, isActive }) =>
    isActive ? colors.blue.blue_5 : colors.white.white_1};
  padding: 35px 25px 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  position: relative;
  top: 0;
  left: 0;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme: { colors }, isActive }) =>
    isActive ? colors.blue.blue_6 : 'transparent'};
  cursor: pointer;

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
  .item-tags {
    display: flex;
    flex-wrap: wrap;
    .content-modify {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      > svg {
        margin-right: 10px;
        height: 20px;
        width: auto;
        margin: 0px 10px 10px 0px;
      }
    }
  }

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
`;

export const MoreTagsCss = styled.div`
  .icon-more {
    padding: 7px;
    margin: 0px 5px 5px 0px;
    border-radius: 5px;
    background: ${({ theme: { colors } }) => colors.blue.blue_1};
    color: ${({ theme: { colors } }) => colors.white.white_1};
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      opacity: 0.7;
    }
    :active {
      transform: scale(0.8);
    }
  }
  display: flex;
  align-items: center;
`;
