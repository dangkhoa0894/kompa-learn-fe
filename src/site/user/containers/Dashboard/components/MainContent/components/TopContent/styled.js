import styled from 'styled-components';
// TOP CONTENT
export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 15px;
  padding-top: 20px;
  position: sticky;
  top: 0px;
  z-index: 2;
  background: ${({ theme: { colors } }) => colors.gray.gray_10};

  .btn-top {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: ${({ theme: { colors } }) => colors.gray.gray_9};
    border-radius: 7px;
    margin-right: 15px;
    cursor: pointer;

    :active {
      transform: scale(0.9);
    }
    &.btn-add {
      margin: 0;
      /* background: ${({ theme: { colors } }) => colors.gray.gray_9}; */
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
    }
    &.btn-search {
      transform: rotateZ(90deg);
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      :active {
        transform: rotateZ(90deg) scale(0.9);
      }
    }
  }

  .top-left,
  .top-right {
    display: flex;
    flex-direction: row;
    align-items: center;

    .top-title {
      font-style: normal;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;
