import styled from 'styled-components';
import { Button } from 'antd';
import { breakpoints } from '../resource/string';
import media from './media';

export const MainButton = styled(Button)`
  width: ${(props) => props.width || 'fit-content'};
  max-width: ${(props) => props.maxWidth || '250px}'};
  height: ${(props) => props.height || '40px}'};
  border-radius: 8px;
  font-weight: bold;
  padding: ${(props) => props.padding || '0px 50px}'};
  box-shadow: ${(props) => props.boxshadow || '0 3px 10px 0 rgba(0,139,255,.3)'};
`;
export const WrapperBody = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
  ${media.md`
  width: ${(props) => breakpoints[props.size] || ''};
	`}
`;
