import styled, { keyframes } from 'styled-components';

const flipHorizontalFwd = keyframes`
 0% {
    -webkit-transform: rotateX(-70deg);
            transform: rotateX(-70deg);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    -webkit-transform-origin: bottom;
            transform-origin: bottom;
    opacity: 1;
  }
    `;
/* 0%{
    -webkit-animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
	        animation: swing-in-bottom-bck 0.6s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
}
100%{
    transform:translateZ(12px);filter:blur(0);opacity:1
    }`; */

export const ContainRequest = styled.div`
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-weight: lighter;
    text-align: center;
  }
  .descriptions {
    padding: 0px 0px 10px;
    font-size: 1.5rem;
    text-align: center;
  }
  .animation-text-flip {
    animation: ${flipHorizontalFwd} 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
  }
`;
