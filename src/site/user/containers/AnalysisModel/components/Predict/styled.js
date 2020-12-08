import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperPredict = styled.div`
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;

  .header-analysis-tag {
    h3 {
      font-style: normal;
      font-weight: bold;
    }
  }
  .body-analysis-predict {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    /* for Firefox */
    padding-top: 10px;
    min-height: 400px;
    ${media.md`
    min-height: 0;
  `}
    .scroll-content {
      background: white;
      flex-grow: 1;

      overflow: auto;
      /* for Firefox */
      min-height: 0;

      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar {
        width: 6px;
        background-color: #f5f5f5;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #d7d7d7;
      }
    }
  }

  .button-predict {
    height: 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 25px 15px;

    .pagination-total {
      color: gray;
    }

    .button {
      display: flex;
      align-items: center;
      margin-left: 25px;
      height: 100%;

      .divide {
        height: 60%;
        width: 1px;
        background: #bfbfbf;
      }
      svg {
        height: 30px;
        width: auto;
        color: ${({ theme: { colors } }) => colors.gray.gray_1};
        cursor: pointer;
        :hover {
          color: ${({ theme: { colors } }) => colors.blue.blue_1};
        }
        :active {
          transform: scale(0.8);
        }
      }
    }
  }
`;
