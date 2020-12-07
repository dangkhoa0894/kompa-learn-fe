import styled, { keyframes } from 'styled-components';

const AnimationLeftToRight = keyframes`
0%  {
    transform:scaleX(.4);
    transform-origin:0 0
    }
100%    {
    transform:scaleX(1);
    transform-origin:0 0
    }
`;

export const ContainerConfig = styled.div`
  display: flex;
  width: 100%;
  /* flex: 1; */
  height: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
  flex-direction: column;
  height: fit-content;
  form {
    padding: 20px;
    background: white;
    border-radius: 10px;
    margin-bottom: 10px;
    .contain {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      padding: 10px;
      .show {
        animation: ${AnimationLeftToRight}.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      }
      .hidden {
        display: none;
      }
    }
  }
  .title-config-advance {
    font-size: 1.3rem;
  }
  .group-button {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    justify-content: space-between;
    padding-top: 20px;

    .btn-reset {
      height: 40px;
      width: 130px;
      border-radius: 10px;
    }
  }
`;

export const ItemConfig = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px;
  /* justify-content: center; */
  /* padding: 10px; */
`;
