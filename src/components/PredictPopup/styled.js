import styled, { keyframes } from 'styled-components';

const scrollColor = '#e4e4e4';

const animationRes = keyframes`
0%{
    transform:(translateY(-100px))
}
100%{
    transform:(translateY(0px))
}
`;

export const PredictPopupContainer = styled.div`
  width: 630px;

  .header-predict {
    display: flex;
    justify-content: space-between;
    span {
      font-size: 1.2rem;
    }
    svg {
      width: auto;
      height: 30px;
      cursor: pointer;
    }
  }
  .button-predict {
    padding-top: 20px;
    display: flex;
    justify-content: flex-end;
    .btn-run {
      width: 110px;
      height: 45px;
      border-radius: 5px;
      transition: all 0.3s;
      :active {
        background: #1890ff;
        transform: scale(0.9, 1);
        -webkit-font-smoothing: antialiased;
      }
    }
  }
  .contain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;

    .input-textarea {
      margin-right: 20px;
      border-radius: 5px;
      resize: unset;
      box-shadow: 0px 4px 10px #dcdcdc;

      ::-webkit-scrollbar {
        transition: all 0.2s;
        width: 12px;
      }

      ::-webkit-scrollbar-track {
        transition: all 0.2s;
        background: white;
        border-left: 1px solid ${scrollColor};
      }

      ::-webkit-scrollbar-thumb {
        transition: all 0.2s;
        background: ${scrollColor};
      }
      :hover,
      :focus {
        border-color: ${scrollColor};
      }
    }
  }

  .res-predict {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    transition: all 0.3s;
    height: fit-content;
    animation: ${({ animation }) => animation && animationRes};
  }
`;
