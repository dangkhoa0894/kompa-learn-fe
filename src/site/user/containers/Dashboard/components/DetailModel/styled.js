import styled from 'styled-components';
import { Typography } from 'antd';

export const WrapperInfoModel = styled.div`
  height: 100%;
  width: ${({ isShowDetail }) => (isShowDetail ? ' 400px' : '0px')};
  position: relative;
  top: 0;
  right: 0;
  transition: width 0.15s;

  > div {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0px;
    display: flex;
    flex-direction: column;

    display: flex;
    flex-direction: column;
    padding: 30px 25px 0px;
  }
  .not-found-data {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// INFO MODEL
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  .department-model {
    color: #000;
    padding-bottom: 10px;
    strong {
      font-style: normal;
      font-weight: normal;
    }
  }
  .info-model {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    color: #999999;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 10px;
    img {
      height: 20px;
      width: auto;
    }
  }
  .model-name {
    font-style: normal;
    font-weight: 800;
    word-break: break-all;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
  }
`;
// DATATRAIN
export const DataTrainContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;

  .view-data-train {
    flex-grow: 1;
    padding-right: 5px;
    overflow: auto;
    margin-top: 10px;
    min-height: 0;
    width: 350px;

    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: #d7d7d7;
    }
  }
`;

// OVERALL
export const OverallContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const TitleProperties = styled(Typography.Text)`
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;
`;

export const TitleHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  .button-func {
    color: ${({ theme: { colors } }) => colors.blue.blue_1};
    font-weight: bold;
    cursor: pointer;
  }
`;

export const DataProcess = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 20px 30px;
  background: #fbfbfb;
  border-radius: 10px;
  margin: 10px 0px;
  .info-process {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const RefreshCss = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  span {
    :hover {
      color: ${({ theme: { colors } }) => colors.blue.blue_1};
    }
    :active {
      transform: scale(0.9);
    }
  }
`;

export const SingleLabelCss = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid gray;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 0px 5px 5px 0px;
  .single-confidence {
    padding-left: 10px;
  }
`;
