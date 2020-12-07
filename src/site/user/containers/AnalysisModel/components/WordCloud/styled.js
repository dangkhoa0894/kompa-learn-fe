import styled from 'styled-components';

export const WrapperWordCloud = styled.div`
  padding: 20px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .header-word-cloud {
    h3 {
      font-style: normal;
      font-weight: bold;
    }
  }
  .body-word-cloud {
    flex: 1;
    min-height: 350px;
  }
`;
