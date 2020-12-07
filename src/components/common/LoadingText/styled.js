import styled from 'styled-components';

export const ContainerLoading = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: ${(props) => props.color};
  }
  img {
    height: 60%;
    width: auto;
  }
`;
