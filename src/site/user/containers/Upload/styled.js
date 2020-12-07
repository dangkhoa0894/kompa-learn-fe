import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .root-upload {
    .ant-upload-drag-container {
      padding: 20px 0px;
    }
  }
`;

export const UploadCss = styled.div`
  display: flex;
  flex-direction: ${({ isSuccess }) => (isSuccess ? 'column' : 'row')};
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  width: 250px;
  .upload-loading {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 0;
    left: 0;
    img {
      width: auto;
      height: 120px;
    }
    .percent-upload {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: #5bb4e1;
    }
  }

  .upload-success {
    background: #00d200;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    margin: 0px 50px;

    svg {
      color: white;
      margin-right: 0px;
    }
  }

  .upload-error {
    /* background: #e41a1a; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border-radius: 100%;
    height: 100px;
    width: 100px;
    margin: 0px 50px;
    svg {
      color: #e41a1a;
      margin-right: 0px;
      width: 100px;
    }
  }
  .title {
    font-weight: bold;
    padding: 20px 0px;
  }
  svg {
    height: auto;
    width: 40px;
    margin-right: 16px;
  }
`;

export const LinkCss = styled(Link)`
  color: ${({ theme: { colors } }) => colors.blue.blue_1};
`;
