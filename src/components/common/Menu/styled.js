import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  .item-menu {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    padding: 10px 20px;
    cursor: pointer;
    margin: 0px 35px 0px 10px;
    border-radius: 9px;
    :focus {
      outline: 0;
    }
    .text {
      color: inherit;
      padding-left: 10px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }

  .active {
    background: ${({ theme: { colors } }) => colors.white.white_1};
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    font-weight: bold;
  }
`;

export const ItemMenu = styled(Link)``;
