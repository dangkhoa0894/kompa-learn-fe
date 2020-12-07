/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from 'antd';
import { ContainerModal, ContentModal } from './styled';

function ModalView(props) {
  const { title, isHeader, content, isOpen, onOk, onCancel, showFooter } = props;
  let isFooter = 'none';
  if (showFooter && (Boolean(onOk) || Boolean(onCancel))) {
    isFooter = 'flex';
  }
  const options = {
    ...props,
    visible: isOpen,
    isFooter,
  };
  return (
    //   eslint-disable-next-line
    <ContainerModal {...options}>
      <ContentModal>
        {isHeader === 'none' && <Typography.Text>{title}</Typography.Text>}
        {content}
      </ContentModal>
    </ContainerModal>
  );
}

ModalView.propTypes = {
  cancelButtonProps: PropTypes.shape({
    type: PropTypes.string,
  }),
  closable: PropTypes.bool,
  content: PropTypes.objectOf(PropTypes.any),
  isHeader: PropTypes.string,
  isOpen: PropTypes.bool,
  maskClosable: PropTypes.bool,
  okButtonProps: PropTypes.shape({
    type: PropTypes.string,
  }),
  okType: PropTypes.string,
  onCancel: PropTypes.any,
  onOk: PropTypes.any,
  // eslint-disable-next-line react/require-default-props
  title: PropTypes.any,
  showFooter: PropTypes.bool,
};

ModalView.defaultProps = {
  isOpen: false,
  isHeader: 'none',
  content: '',
  closable: false,
  maskClosable: true,
  onOk: false,
  onCancel: false,
  okType: 'primary',
  okButtonProps: { type: 'primary' },
  cancelButtonProps: { type: 'default' },
  showFooter: true,
};
export default ModalView;
