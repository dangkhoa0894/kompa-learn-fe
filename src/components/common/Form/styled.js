import styled from "styled-components";
import media from "SRC/styles/media";

export const ContainerBlock = styled.div`
  width: 100%;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  border-radius: 5px;
  margin-bottom: 50px;
  box-shadow: 0 2px 4px 0 rgba(6, 21, 33, 0.04),
    0 0 2px 0 rgba(16, 25, 32, 0.03);
  padding: 10px;
  ${media.md`
  padding:0px;
  padding-bottom: 10px;
    `};
`;

export const TitleHeader = styled.div`
  width: 100%;
  width: 100%;
  padding: 5px 15px;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.5em;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
`;

export const ContentBody = styled.div`
  width: 100%;
  padding-top: 10px;
  .row-content {
    padding: 5px;
    ${media.sm`
    padding: 7px 20px;
  `};
    .input {
      border-radius: 10px;

      textarea {
        height: 100% !important;
        border-radius: 10px;
        resize: none;
      }
      .select-option {
        width: 100%;
        > div {
          border-radius: 10px;
        }
      }
    }
    /* Col label input */
    .col-label {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      font-weight: 600;
      padding: 5px 0px;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      ${media.sm`
      padding: 0px;
      white-space:nowrap;
    justify-content: flex-end;
    `};
    }
    /* Col enter input */
    .col-input {
      padding-left: 0px;
      display: flex;
      flex-direction: column;
      button {
        margin: 10px 0px;
      }
      ${media.sm`
  padding-left:10px;
    `}
    }
    .button-group {
      display: flex;
      justify-content: flex-end;
    }
  }
`;
