import styled, { keyframes } from 'styled-components';

const barWidth = '90px';
const barHeight = '25px';

const animateNegative = keyframes`
0% { width:%; }  
`;

export const StatusContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

export const ProcessCss = styled.div`
  border-radius: 5px;
  position: relative;
  border: solid 1px ${({ theme: { colors } }) => colors.status.processBar.border};
  width: ${barWidth};
  height: ${barHeight};
  line-height: ${barHeight};
  z-index: 0;
  vertical-align: middle;
  overflow: hidden;
  /* font-family: arial, sans-serif; */
  font-weight: bold;
  font-size: 30px;
  /* box-shadow: 0 4px 10px -5px rgba(0, 0, 0, 0.25); */

  .percent-train {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    font-size: 0.75rem;
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    font-style: normal;
    font-weight: normal;
  }

  .bar {
    position: absolute;
    top: 0;
    height: 100%;
    overflow: hidden;
    span {
      position: absolute;
      font-size: 0.7rem;
      display: block;
      width: ${barWidth};
      height: 100%;
      text-align: center;
    }
    &.positive {
      background: #c1ecff;
      /* transition: all 0.2s; */
      animation-timing-function: ease-in;
      left: 0;
      width: ${({ percent }) => `${percent}%`};
      span {
        left: 0;
        color: #07a4dd;
      }

      /* -webkit-animation: animate-positive 4s;
      animation: animate-positive 4s; */
      animation: ${animateNegative} 0.2s;
    }
    &.negative {
      background: #fff;
      right: 0;
      transition: all 1s;
      animation-timing-function: ease-in;
      width: ${({ percent }) => `${100 - percent}%`};
      span {
        right: 0;
        color: #07a4dd;
      }
      animation: ${animateNegative} 0.2s;
    }
  }
`;

export const StatusCss = styled.div`
  .status {
    border-width: 1px;
    border-style: solid;
    height: ${barHeight};
    width: ${barWidth};
    border-radius: 5px;
    text-align: center;

    &.configuring {
      color: #382d31;
      background: #dfe0e2;
    }
    &.pending {
      color: ${({ theme: { colors } }) => colors.status.pending.color};
      background: ${({ theme: { colors } }) => colors.status.pending.background};
    }
    &.inProgress {
      color: ${({ theme: { colors } }) => colors.status.inProcess.color};
      background: ${({ theme: { colors } }) => colors.status.inProcess.background};
    }
    &.train {
      color: ${({ theme: { colors } }) => colors.status.train.color};
      background: ${({ theme: { colors } }) => colors.status.train.background};
    }
    &.completed {
      color: ${({ theme: { colors } }) => colors.status.completed.color};
      background: ${({ theme: { colors } }) => colors.status.completed.background};
    }
    &.error {
      color: ${({ theme: { colors } }) => colors.status.error.color};
      background: ${({ theme: { colors } }) => colors.status.error.background};
    }
  }
`;
