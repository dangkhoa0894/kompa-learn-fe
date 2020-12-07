import PropTypes from 'prop-types';
import React from 'react';
import { HiMenu } from 'react-icons/hi';
import { GrFormClose } from 'react-icons/gr';
import { WrapperBtnMenu } from './styled';

const ButtonMenu = (props) => {
  const { isOpen, onClick, onKeyPress } = props;
  return (
    <WrapperBtnMenu onClick={() => onClick()} onKeyPress={() => onKeyPress()}>
      {isOpen ? <GrFormClose /> : <HiMenu />}
    </WrapperBtnMenu>
  );
};

ButtonMenu.propTypes = {
  isOpen: PropTypes.bool,
  onKeyPress: PropTypes.func,
  onClick: PropTypes.func,
};

ButtonMenu.defaultProps = {
  isOpen: false,
  onClick: () => {},
  onKeyPress: () => {},
};
export default ButtonMenu;
