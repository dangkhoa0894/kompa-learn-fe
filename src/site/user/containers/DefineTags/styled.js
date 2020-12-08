import styled from "styled-components";
import { Row, Input } from "antd";
import media from "SRC/styles/media";
import { FaPlus } from "react-icons/fa";

export const Container = styled.div``;

export const ContentInput = styled(Row)`
  padding: 40px 10px 80px;
  > div {
    position: relative;
    top: 0;
    right: 0;
  }
  ${media.md`
    width:100%;
    `}
`;

export const InputTag = styled(Input)`
  height: 60px;
  border-radius: 15px;
  padding: 0px 60px 0px 20px;
  font-size: 1.2em;
  font-weight: 600;
  color: ${({ theme: { colors } }) => colors.gray.gray_4};
`;

export const IconAddTag = styled(FaPlus)`
  font-size: 3em;
  border-radius: 50%;
  background: ${({ theme: { colors } }) => colors.blue.blue_2};
  color: ${({ theme: { colors } }) => colors.blue.blue_1};
  padding: 6px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const IconGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 10px;
`;

export const ContentListTags = styled(Row)`
  padding: 10px;
  width: 100%;
  ${media.md`
           width: 700px;
    `}
  >div {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Tag = styled.div`
  background: ${({ theme: { colors } }) => colors.gray.gray_7};
  width: fit-content;
  padding: 5px 15px;
  border-radius: 30px;
  margin-bottom: 15px;
  margin-right: 15px;
  display: flex;
  align-items: center;
  :hover {
    box-shadow: 0px 2px 3px 2px #d9d9d9;
  }
  .tag-item {
    padding-right: 10px;
    font-weight: bold;
    color: ${({ theme: { colors } }) => colors.gray};
  }
  .icon-close {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.gray.gray_4};

    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
  }
`;
export const ContentButton = styled(Row)`
  margin: 35px 0px;
`;

export const ConfigModel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  .title-algorithm {
    padding: 0px 20px;
    color: #a1a1a1;
    font-size: 1.2rem;
  }
  .input-algorithm {
    width: 250px;
    .ant-select-selector {
      border-radius: 30px;
      padding: 0px 20px;
      height: 40px;
      display: flex;
      align-items: center;
    }
  }
`;
