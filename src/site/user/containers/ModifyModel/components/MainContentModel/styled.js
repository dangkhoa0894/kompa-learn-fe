import styled from 'styled-components';

export const MainContentWrapper = styled.div`
  flex: 1;
  height: max-content;
  padding: 0px 30px 30px;
background:${({ theme: { colors } }) => colors.gray.gray_10};
z-index:2;

  .main-title {
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    background: ${({ theme: { colors } }) => colors.gray.gray_10};
    padding: 25px 0px;
    z-index: 2;
    }
    .top-title {
      display: flex;
      align-items: center;
      font-style: normal;
    font-weight: bold;
      .span-top-title {
        font-style: inherit;
        font-weight: inherit;
        color: ${({ theme: { colors } }) => colors.gray.gray_4};
      }
    }
  }

  .loading-content {
    height: 100px;
    width: 100%;
    > div {
      margin-bottom: 10px;
    }

    /* display: flex;
    align-items: center;
    justify-items: center; */
  }
`;
