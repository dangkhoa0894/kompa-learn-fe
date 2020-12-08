import styled from "styled-components";
import media from "SRC/styles/media";

export const SetupDataContainer = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;

  .step-bar {
    width: 100%;
  }

  ${media.xs`
  .step-bar {
    width: 400px;
  }
  `}
`;
export const BodyModule = styled.div`
  display: flex;
`;
