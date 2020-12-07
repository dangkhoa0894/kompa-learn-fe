import { Avatar, Button } from 'antd';
import styled from 'styled-components';

export const AvatarUser = styled(Avatar)`
  cursor: pointer;
  background-color: #87d068;
  path {
    color: ${({ theme: { colors } }) => colors.white.white_1};
  }
`;

export const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  padding: 6px 0px;
  h4 {
    font-size: 0.8rem;
    margin-bottom: 0px;
  }
`;
export const ButtonCreate = styled(Button)`
  box-shadow: 0 2px 4px 0 rgba(0, 136, 255, 0.34);
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    font-size: 0.7rem;
  }
`;

export const ActionUser = styled.div`
  display: flex;
  align-items: center;
  width: 90px;
  justify-content: space-around;
  svg {
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    :hover {
      color: ${(props) => props.theme.colors.blue.blue_1};
    }
  }
`;

export const BodyContent = styled.div`
  .item-api {
    padding: 10px 15px;
    border-bottom: 1px solid ${(props) => props.theme.colors.gray.gray_5};
    display: flex;
    align-items: center;
    h4 {
      font-weight: bold;
      font-size: 0.7rem;
      margin: 0px;
    }
    .content-api {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 110px;
      display: block;
      padding-left: 5px;
      cursor: pointer;
      color: ${(props) => props.theme.colors.blue.blue_1};
      :hover {
        text-decoration: underline;
      }
    }
  }
  .item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 15px;
    font-size: 0.7rem;
    svg {
      margin-right: 10px;
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
    :hover {
      background: ${({ theme: { colors } }) => colors.blue.blue_3};
    }
  }
`;
