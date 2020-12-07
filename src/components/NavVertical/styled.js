import styled, { keyframes } from 'styled-components';

const animationScaleInVerBottom = keyframes` 
0% {
    transform:scaleY(0);
    transform-origin:0 100%;
    opacity:1
    }
100%{
        transform:scaleY(1);
        transform-origin:0 100%;
        opacity:1
        }`;

const animationScaleInCenter = keyframes`
0%{transform:scaleX(0);opacity:1}100%{transform:scaleX(1);opacity:1}`;
const widthNav = '65px';
export const WrapperNav = styled.div`
  display: flex;
  flex-direction: column;
  width: ${widthNav};
  height: 100%;
  max-width: ${widthNav};
  min-width: ${widthNav};
  align-items: center;
  border-right: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  z-index: 2;
  background: white;
  .logo-company {
    width: 60px;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const NavItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55px;
  /* border-right: 2px solid ${(props) => (props.active ? '#05aeee' : 'transparent')}; */
  /* transition: border-width 0.6s linear; */
  margin: 5px 0px;
  position: relative;

  &:after {
    content: '';
    background: #05aeee;
    width: 3px;
    height: 100%;
    position: absolute;
    display: ${(props) => (props.active ? 'block' : 'none')};
    right: 0px;
    top: 0px;
    animation: ${animationScaleInVerBottom}.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .icon-group {
    height: 48px;
    width: 48px;
    display: flex;
    align-items: center;
    background: ${({ theme: { colors }, active }) => (active ? colors.blue.blue_8 : 'transparent')};
    justify-content: center;
    border-radius: 5px;
    position: relative;
    :hover {
      &:after {
        content: '';
        background: #ebf8fd;
        height: 48px;
        width: 48px;
        position: absolute;
        right: 0px;
        top: 0px;
        animation: ${animationScaleInCenter} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      }
    }
    svg {
      height: 20px;
      width: 20px;
      z-index: 2;
      color: ${({ active, theme: { colors } }) =>
        active ? colors.blue.blue_1 : colors.gray.gray_1};
    }
  }
`;
