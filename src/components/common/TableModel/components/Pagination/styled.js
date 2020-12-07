import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ sizePage }) => (sizePage > 1 ? 'space-between' : 'center')};
  position: sticky;
  bottom: 0px;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  padding: 10px 15px;

  .page-index {
    display: flex;
    .item-page {
      cursor: pointer;
      height: 30px;
      width: 30px;
      background: ${({ theme: { colors } }) => colors.gray.gray_10};
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      font-weight: bold;
      margin: 0px 5px;
      position: relative;

      :active {
        transform: scale(0.9);
      }
      &.active {
        background: ${({ theme: { colors } }) => colors.blue.blue_8};
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
        :hover {
          transform: scale(1);
        }
        :after {
          content: '';
          background: ${({ theme: { colors } }) => colors.blue.blue_1};
          height: 2px;
          width: 100%;
          position: absolute;
          bottom: 0px;
          transform: translateY(10px);
        }
      }
    }
  }
  .temp-pagination {
    width: 81.55px;
    background: transparent;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 10px;
    background: ${({ theme: { colors } }) => colors.gray.gray_10};
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.2s;
    :active {
      transform: scale(0.9);
    }
    :hover {
      span,
      svg {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
      }
    }

    span,
    svg {
      font-size: 0.7rem;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      text-transform: uppercase;
      font-weight: bold;
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }

    &.prev {
      span {
        padding-left: 10px;
      }
    }
    &.next {
      span {
        padding-right: 10px;
      }
    }
  }
`;
