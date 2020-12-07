import styled from 'styled-components';

const heightLabel = 22;
export const InputContain = styled.div`
  position: relative;
  top: 0;
  height: ${(props) => `${(props.height || 30) + (props.label && heightLabel)}px`};
  margin: ${(props) => props.margin};
  input {
    width: ${(props) => props.width || '100%'};
    height: ${(props) => `${props.height || 30}px`};
    padding: 4px 10px;
    position: absolute;
    bottom: 0px;
    border-radius: 5px;
    border: 1px solid ${({ theme: { colors } }) => colors.gray.hover};
    :focus {
      outline: 0;
      border: 2px solid ${({ theme: { colors } }) => colors.blue.blue_1};
      box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    }
  }
  span {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    height: ${heightLabel}px;
    transition: 0.5s;
    transform: translateY(30px);
    font-size: 0.8rem;
    font-weight: 700;
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    opacity: 0;
    font-weight: 500;
    font-style: normal;
    &.show {
      transform: translateY(0px);
      opacity: 0.8;
    }
  }
`;
