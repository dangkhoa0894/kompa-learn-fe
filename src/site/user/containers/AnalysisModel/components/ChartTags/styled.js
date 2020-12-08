import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperAnalysisTag = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;

  .header-analysis-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-style: normal;
      font-weight: bold;
    }
    .header-view-all {
      cursor: pointer;
    }
  }

  .analysis-tag {
    flex: 1;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const DetailTopicCss = styled.div`
  min-width: 100%;
  ${media.md`
 min-width: 500px;
 `}
  width: 100%;
`;
