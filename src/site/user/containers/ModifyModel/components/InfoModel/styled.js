import styled from 'styled-components';

export const InfoModelWrapper = styled.div`
  width: 400px;
  background: ${({ theme: { colors } }) => colors.white.white_1};
  padding: 30px 30px 0px;
  width: 400px;
  height: 100%;
  position: sticky;
  top: 0px;
  display: flex;
  flex-direction: column;

  .container-info {
    flex: 1;
  }
  .button-group {
    padding: 10px 0px;
  }
`;

export const TemplateCss = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 0px 20px;

  .template-title {
    font-style: normal;
    font-weight: bold;
    padding-bottom: 10px;
  }
`;
