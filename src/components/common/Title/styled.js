import styled from "styled-components";
import media from "SRC/styles/media";

export const TitleContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  .title {
    width: 100%;
    padding: 20px 0px 60px;
  }

  .descriptions {
    padding: 0px 0px 20px;
  }
  ${media.xs`
    width:700px;
  `}
`;
