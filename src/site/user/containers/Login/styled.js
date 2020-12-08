import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperLogin = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background: #f5f7fa;
  box-shadow: ${({ theme: { colors } }) => colors.gray.gray_2};
  flex-direction: column;
  padding-top: 40px;
  padding: 0px 10px;

  .logo-company {
    padding: 20px;
  }

  .container-login {
    border-radius: 10px;
    width: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    ${media.xs`
    width: 400px;
    `}
    .title {
      text-align: center;
      padding: 20px 0px 10px;
      font-style: normal;
      font-weight: normal;
      margin: 0;
    }
    .contain-input {
      padding: 20px;
      display: flex;
      flex-direction: column;
      > input {
        margin-top: 20px;
        border-radius: 5px;
        height: 30px;
        height: 45px;
        font-size: 1rem;
      }
      .forgot-password {
        color: ${({ theme: { colors } }) => colors.blue.blue_1};
        font-size: 0.8rem;
        cursor: pointer;
        :hover {
          text-decoration: underline;
        }
      }
      .error {
        padding-top: 10px;
        text-align: center;
      }
      .btn-login {
        border-radius: 20px;
        margin: 30px 0px;
        height: 40px;
        span {
          font-style: normal;
          font-weight: 800;
        }
      }
    }
  }
`;
