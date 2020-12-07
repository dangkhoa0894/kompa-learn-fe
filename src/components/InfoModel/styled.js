import styled from 'styled-components';

export const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-info-model {
    width: 100%;
    font-style: normal;
    font-weight: bold;
  }

  .detail-info {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    .content-total-rows {
      display: flex;
      justify-content: center;
      .detail-total-rows {
        font-style: normal;
        font-weight: normal;
        font-size: 3.8rem;
        text-align: center;
        width: fit-content;
        height: 95px;
      }
    }
  }
`;

export const TemplateInfoCss = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 0px;

  .title-template {
    font-size: 0.9rem;
    font-style: normal;
    font-weight: bold;
  }
  .descriptions-template {
    color: ${({ theme: { colors } }) => colors.gray.gray_4};
    font-style: normal;
    font-weight: normal;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding-top: 5px;
  }
`;
