import styled from "styled-components";
import media from "SRC/styles/media";

const colorBtnSign = "#6ac040";

export const ContainButton = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;

  ${media.md`
    width:500px ;
    `}
  .btn-g {
    display: flex;
    justify-content: center;
    .btn {
      border-radius: 60px;
      height: 50px;
      width: 200px;
      margin: 10px 0px;
      transition: 0.5s;
      span {
        font-weight: bold;
      }
      ${media.sm`
        width: 90%;
    `}
      :hover {
        box-shadow: ${({ theme: { colors } }) => colors.gray.gray_2};
      }

      &.btn-sign {
        background-color: ${colorBtnSign};
        border-color: ${colorBtnSign};
        display: flex;
        align-items: center;
        justify-content: center;
        span {
          color: ${({ theme: { colors } }) => colors.white.white_1};
          text-transform: uppercase;
          font-weight: bold;
          line-height: 1px;
        }
        svg {
          margin-left: 10px;
          transition: 0.5s;
        }
        :hover {
          background-color: #4ba91c;
          svg {
            margin-left: 30px;
          }
        }
      }
      &.btn-schedule {
        :hover {
          span {
            color: ${({ theme: { colors } }) => colors.blue.blue_1};
            transition: 1.5s;
          }
        }
      }
    }
  }
`;
