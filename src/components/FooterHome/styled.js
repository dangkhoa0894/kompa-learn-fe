import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperFooter = styled.div`
  width: 100%;
  padding: 42px 0px;
  flex: 1;
  width: 100%;
  position: relative;
  bottom: 0;
  .company {
    display: flex;
    justify-content: center;
    padding: 30px 0px;
  }

  .col-data {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    .title {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
      text-transform: uppercase;
    }
    .contain-site {
      padding: 0px;
      li {
        list-style-type: none;
      }
    }
  }

  ${media.md`
    .company {
    justify-content: flex-start;
    padding: 20px;
    align-items:flex-start;
  }
    `}
  ${media.lg`
    width:1200px;    
    `}
`;
