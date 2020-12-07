import styled from 'styled-components';

const scrollColor = '#e4e4e4';

export const DetailModelWrapper = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  background: ${({ theme: { colors } }) => colors.gray.gray_10};
  overflow: auto;

  ::-webkit-scrollbar {
    transition: all 0.2s;
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    transition: all 0.2s;
    background: white;
    border-left: 1px solid ${scrollColor};
  }

  ::-webkit-scrollbar-thumb {
    transition: all 0.2s;
    background: ${scrollColor};
  }
`;
