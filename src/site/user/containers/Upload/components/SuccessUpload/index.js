import PropTypes from 'prop-types';
import React from 'react';
import { Typography, Button } from 'antd';
import { AiOutlineCloudUpload, AiOutlineCheck } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

const SuccessUpload = (props) => {
  const { isSuccess } = props;
  const renderUpload = () => {
    switch (isSuccess) {
      case 1:
        return (
          <>
            <div className="upload-success">
              <AiOutlineCheck />
            </div>
            <Typography.Text className="title">Upload Complete!</Typography.Text>
            <Button color="primary">Upload new</Button>
          </>
        );
      case 0:
        return (
          <>
            <AiOutlineCloudUpload />
            <div className="right-content">
              <Typography.Title level={2}>Upload</Typography.Title>
              <Typography.Text>Drag & Drop to upload or Click</Typography.Text>
            </div>
          </>
        );
      case -1:
        return (
          <>
            <div className="upload-error">
              <MdCancel />
            </div>
            <Typography.Text className="title">File invalid</Typography.Text>
            <Button color="primary">Upload new</Button>
          </>
        );
      default:
        return <div>oke</div>;
    }
  };

  return renderUpload();
};

SuccessUpload.propTypes = {
  isSuccess: PropTypes.number,
};

SuccessUpload.defaultProps = {
  isSuccess: 0,
};

export default SuccessUpload;
