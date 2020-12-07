import styled, { css, keyframes } from 'styled-components';

const slideTop = keyframes`
0%{transform:translateY(50px);opacity:0}
100%{transform:translateY(0px);opacity:1}`;

export const WrapperBlockModel = styled.div`
  display: ${({ isMoreTemplate }) => (isMoreTemplate ? 'flex' : 'none')};
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 14px;

  cursor: pointer;
  /* transform:translateY(-100px) */
  overflow: hidden;
  min-height: 179px;
  animation-delay: 2s;
  animation: ${({ animation }) =>
    animation &&
    css`
      ${slideTop} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
    `};
  .top-block {
    min-height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 5px;
    .top-bl-right {
      flex: 1;
      display: flex;
      justify-content: center;
      img {
        width: auto;
        height: 60px;
      }
    }
    .top-bl-left {
      flex: 2;
      display: flex;
      flex-direction: column;
      .top-bl-left-top {
        flex: 1;
        font-weight: 600;
      }
      .top-bl-left-bottom {
        flex: 1;
        text-align: right;
        font-size: 0.8rem;
        white-space: nowrap;
        .green-text {
          color: green;
          font-size: 1.2rem;
        }
      }
    }
  }
  .body-block {
    flex: 1;
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.8rem;
    min-height: 42px;
  }
  .bottom-block {
    min-height: 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: flex;
    align-items: center;
    padding-top: 10px;
    span {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    img {
      height: 20px;
      width: auto;
      margin-right: 10px;
    }
  }
`;
