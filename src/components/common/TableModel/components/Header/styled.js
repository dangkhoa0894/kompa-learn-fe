import styled, { css } from 'styled-components';

export const WrapperHeader = styled.thead`
  display: contents;
  tr {
    display: contents;
  }
`;

export const ItemHeader = styled.th`
  position: sticky;
  top: 0;
  text-align: left;
  font-weight: normal;
  font-size: 1.1rem;
  color: white;
  height: 48px;
  z-index: 5;
  background: ${({ theme: { colors } }) => colors.gray.gray_7};
  ${({ sticky, stickyLeft }) =>
    sticky &&
    css`
      left: ${stickyLeft};
      z-index: 6;
    `};
  padding: 10px;
  .th-content {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: ${({ sort }) => sort && 'pointer'};
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

    .th-title {
      font-size: 0.7rem;
      font-style: normal;
      font-weight: bold;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
    }

    .sort {
      display: flex;
      align-items: center;
      margin-left: 5px;
      svg {
        color: ${({ theme: { colors } }) => colors.gray.gray_1};
        height: 15px;
      }
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

    .sort {
      .active {
        color: #01adee;
      }
    }
  }
`;
