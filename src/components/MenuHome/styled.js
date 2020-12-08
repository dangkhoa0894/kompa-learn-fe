import styled from "styled-components";
import media from "SRC/styles/media";

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0px 20px;
  ${media.lg`
  width: 1200px;
  `}
`;
