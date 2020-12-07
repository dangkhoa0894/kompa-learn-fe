import styled from 'styled-components';
import { Col } from 'antd';

export const ContainerApiKey = styled.div`
  width: 100%;
`;
export const ColApi = styled(Col)`
  display: flex;
  align-items: center;
  background: ${({ theme: { colors } }) => colors.blue.blue_3};
  padding: 5px;
  border-radius: 5px;
  justify-content: space-between;
  flex-wrap: wrap;
  overflow: hidden;
  .api-key {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    svg {
      margin-right: 10px;
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
    .label-api {
      color: ${({ theme: { colors } }) => colors.gray.gray_4};
      white-space: nowrap;
    }
    .api {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 0.7rem;
      padding-left: 2px;
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;
