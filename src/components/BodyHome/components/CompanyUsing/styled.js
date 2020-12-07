import styled from 'styled-components';

export const ContainCompanyUsing = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0px;
  width: 100%;
  flex-direction: column;
  .label-company {
    text-align: center;
    color: ${({ theme: { colors } }) => colors.gray.gray_4};
  }
`;

export const ContainCompany = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .item {
    min-width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0px;
    img {
      height: 40px;
    }
  }
`;
