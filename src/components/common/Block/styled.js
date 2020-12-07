import styled from 'styled-components';

export const BlockContainer = styled.div`
  display: flex;
  height: 180px;
  cursor: pointer;
  padding: 10px;
  border: 1px solid ${({ theme: { colors } }) => colors.white.white_1};
  border-radius: 5px;
  flex-direction: column;
  background: #fff;
  opacity: ${(props) => (props.status === 1 ? 1 : 0.7)};
  /* avatar */
  .avatar-group {
    height: 50px;
    .avatar {
      height: 50px;
      width: 50px;
    }
    .icon-more {
      font-size: 1.2em;
      color: ${({ theme: { colors } }) => colors.gray.gray_1};
      opacity: 0.4;
      :hover {
        opacity: 1;
      }
    }
  }
  /* content */
  .content-group {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .title-content {
      font-size: 1.2em;
      font-weight: 500;
      display: flex;
      align-items: center;

      span {
        color: black;
        text-transform: capitalize;
      }
    }
    .content {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
  .popover {
    padding: 0px;
  }
  :hover {
    box-shadow: 2px 4px 6px 0px ${({ theme: { colors } }) => colors.gray.gray_3};
  }
`;

export const ActionModel = styled.div`
  min-width: 150px;
  display: flex;
  flex-direction: column;

  > div {
    height: 40px;
    display: flex;
    align-items: center;
    padding: 10px;
    text-transform: capitalize;
    font-weight: 500;
    color: ${({ theme: { colors } }) => colors.gray.gray_1};
    border-radius: 5px;
    cursor: pointer;
    :focus {
      outline: 0;
    }
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;

export const ContainerLoading = styled.div`
  height: 180px;
  padding: 10px;
  /* border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_6}; */
  background: ${({ theme: { colors } }) => colors.white.white_1};
  border-radius: 5px;
`;

export const ContentStatus = styled.div`
  display: flex;
  .label-status {
    margin-right: 10px;
  }
  .value-status {
    font-weight: 500;
  }
  .pending {
    color: #faad14;
  }
  .trained {
    color: #0d9a00;
  }
  .error {
    color: red;
  }
`;
