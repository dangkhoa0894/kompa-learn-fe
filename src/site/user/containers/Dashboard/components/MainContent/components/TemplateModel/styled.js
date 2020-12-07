// TEMPLATE MODEL
import styled, { keyframes } from 'styled-components';

const slideTop = keyframes`
0%{height:0%;opacity:0}
100%{height:100%;opacity:1}`;

export const ContainerTemplateModel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-basis: inherit;
  /* flex-grow: ${({ isMoreTemplate }) => (isMoreTemplate ? 1 : 0)};
  fle */
  flex-grow: 1;
  padding-bottom: 10px;
  .title-template {
    width: 100%;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: sticky;
    top: 69px;
    background: ${({ theme: { colors } }) => colors.gray.gray_10};
    z-index: 2;

    .strong {
      font-weight: bold;
    }
    .more-model {
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        margin-left: 10px;
      }
    }
  }

  .content-template {
    width: 100%;
    padding: 10px 0px 0px;
    min-height: 201px;
  }

  .more-template {
    display: ${({ isMoreTemplate }) => (isMoreTemplate ? 'unset' : 'none')};
    width: 100%;
    height: 100%;
    animation-delay: 1s;
    animation: ${slideTop} 0.5s;
  }
`;
