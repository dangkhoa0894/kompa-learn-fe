import { Col } from 'antd';
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  padding: 20px;
  border: 4px solid ${({ theme: { colors } }) => colors.gray.gray_5};
  border-radius: 5px;
  flex-direction: column;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  transition: 0.5s;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  :hover {
    box-shadow: 2px 4px 6px 0px ${({ theme: { colors } }) => colors.blue.blue_4};
    border: 4px solid ${({ theme: { colors } }) => colors.blue.blue_1};
    > div:last-child {
      opacity: 1;
    }
  }
`;
export const ColAvatar = styled(Col)`
  padding-top: 30px;
  span {
    height: 70px;
    width: 70px;
  }
`;
export const ColTitle = styled(Col)`
  font-weight: bold;
  padding: 20px 0px;
  font-size: 1.7em;
  line-height: 30px;
  text-align: center;
  height: 85px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const ColContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.2em;
  text-align: center;
  margin: 0px 0px 20px;
  height: 50px;
`;

export const IconTickHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2px;
  padding: 7px;
  opacity: 0;
  transition: 0.5s;
  svg {
    background: ${({ theme: { colors } }) => colors.blue.blue_1};
    color: #fff;
    z-index: 2;
    position: absolute;
    font-size: 1.3em;
    border-radius: 10px;
  }
  :after {
    content: '';
    position: absolute;
    top: -27px;
    left: -13px;
    width: 41px;
    height: 89px;
    transform: rotate(45deg);
    z-index: 1;
    background: ${({ theme: { colors } }) => colors.blue.blue_1};
  }
`;

export const IconDownload = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: 0.5s;
  svg {
    /* background:#137afa; */
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    z-index: 2;
    font-size: 1.9em;
  }
`;
