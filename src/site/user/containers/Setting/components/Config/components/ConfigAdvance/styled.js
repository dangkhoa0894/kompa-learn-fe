import styled from 'styled-components';

export const WrapperAdvance = styled.div`
  .input-epochs {
    width: 100%;
  }
  input {
    border-radius: 5px;
  }
  .row-config {
    .col-config {
      .content-col {
        border: 1px solid ${({ theme: { colors } }) => colors.gray.gray_5};
        border-radius: 5px;
        padding: 20px;
      }
    }
  }
`;
