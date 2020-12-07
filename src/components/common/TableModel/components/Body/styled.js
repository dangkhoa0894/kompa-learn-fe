import styled, { css } from 'styled-components';

export const WrapperBody = styled.tbody`
  display: contents;

  .col-span {
    grid-column-start: 1;
    grid-column-end: 8;
  }
  .row-span {
    width: 100%;
    display: flex;
  }
`;

export const ItemData = styled.tr`
  display: contents;
  border: 1px solid #ededed;
  border-radius: 10px;
  margin: 5px 0px;
  cursor: pointer;
  border-collapse: separate;
  td:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: ${({ active }) => (active ? '3px solid #06aeee !important' : '1px solid #ededed')};
    margin-left: 10px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-right: 1px solid #ededed;
    margin-right: 10px;
  }

  &:hover {
    td {
      border-top: 1px solid #06aeee;
      border-bottom: 1px solid #06aeee;
    }
    td:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border-left: 1px solid #06aeee;
    }

    td:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      border-right: 1px solid #06aeee;
    }
    border: 1px solid #06aeee;
    background: #f7fdff;
  }
`;

export const Content = styled.td`
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  justify-content: ${({ textAlign }) => {
    switch (textAlign) {
      case 'right':
        return 'flex-end';
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      default:
        return 'left';
    }
  }};
  ${({ sticky, stickyLeft, theme: { colors } }) =>
    sticky &&
    css`
      position: sticky;
      left: ${stickyLeft};
      z-index: 2;
      background: ${colors.white.white_1};
    `}
  .sort {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      span {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    `}
`;
