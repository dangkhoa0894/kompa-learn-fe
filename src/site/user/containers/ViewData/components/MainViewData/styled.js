import styled from 'styled-components';
// TOP CONTENT
export const WrapperMainViewData = styled.div`
  flex: 1;
  display: flex;
  /* background: ${({ theme: { colors } }) => colors.gray.gray_7}; */
  background: ${({ theme: { colors } }) => colors.gray.gray_10};
  padding: 0px 35px 20px;
  flex-direction: column;
  z-index: 2;
  height: max-content;

  .main-title {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: ${({ theme: { colors } }) => colors.gray.gray_10};
    padding: 25px 0px;
    z-index: 2;
    .top-title {
      display: flex;
      align-items: center;
    }
  }
`;
