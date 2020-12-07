import styled from 'styled-components';

export const ContainerFilter = styled.div`
  cursor: pointer;
`;

export const ContentData = styled.div`
  width: 150px;
  padding: 5px 0px;
`;

export const Item = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
    height: 20px;
    width: 20px;
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
  }
  .empty {
    width: 25px;
  }
  :hover {
    background-color: ${({ theme: { colors } }) => colors.blue.blue_3};
  }
`;
