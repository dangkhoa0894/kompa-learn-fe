import styled from 'styled-components';

export const ItemDataPreview = styled.div`
  width: 100%;
  padding: 10px;
  background: #f7f7f7;
  border-radius: 15px;
  margin: 5px 0px;
  overflow-x: auto;
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

  .content-item {
    color: black;
    margin-bottom: 5px !important;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: normal;
    font-weight: 600;

    &.show {
      -webkit-line-clamp: initial;
    }
  }
  .button-more {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin: 7px 0px;

    .more-item {
      border-bottom: 1px solid ${({ theme: { colors } }) => colors.blue.blue_6};
      border-radius: 3px;
      padding: 0px 6px;
      color: ${({ theme: { colors } }) => colors.blue.blue_6};
      cursor: pointer;
      display: flex;
      align-items: center;
      height: fit-content;
      cursor: pointer;
    }
  }
  .label-item {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
  }
`;
