import styled from 'styled-components';

export const WrapperDataModel = styled.div`
  .loading {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
    background: ${({ theme: { colors } }) => colors.black.black_1};
    z-index: 2;
    display: none;
    width: 100%;
    height: 100%;
    &.show {
      display: block;
    }
  }
  .footer-content {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;
    font-weight: 900;
    background: ${({ theme: { colors } }) => colors.gray.gray_4};
    color: ${({ theme: { colors } }) => colors.white.white_1};
    border-radius: 5px;
  }
`;

export const LoadingCss = styled.div``;
