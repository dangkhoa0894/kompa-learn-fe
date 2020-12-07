import styled, { keyframes } from 'styled-components';

const loadRight = keyframes`
  0% {
      transform:  translate(-120px,0px)  ;
    }
    70% {
      transform:  translate(10px,0px)  ;
    }
    90% {
      transform:  translate(-5px,0px)  ;
    }
    100% {
      transform:  translate(0px,0px)  ;
    }
`;

const loadLeft = keyframes`
  0% {
      transform:  translate(120px,0px)  ;
    }
    70% {
      transform:  translate(-10px,0px)  ;
    }
    90% {
      transform:  translate(5px,0px)  ;
    }
    100% {
      transform:  translate(0px,0px)  ;
    }
`;
export const WrapperFeedBackCustomer = styled.div`
  padding-top: 100px;
`;

export const BlockFB = styled.div`
  animation: ${(props) => (props.index % 2 === 0 ? loadRight : loadLeft)} ease-in 0.8s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;

  background: ${({ theme: { colors } }) => colors.white.white_1};
  padding: 30px;
  box-shadow: ${({ theme: { colors } }) => colors.gray.gray_2};
  border-radius: 5px;
  height: 260px;
  padding-left: 0px;
  .image-fb {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-avatar {
      width: 60px;
      height: 60px;
    }

    .img-company {
      width: 65px;
      padding-top: 15px;
      height: 40px;
    }
  }

  .info-fb {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    .info-name {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .info-position {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }

    .info-feed-back {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
`;
