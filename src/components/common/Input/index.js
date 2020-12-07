import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import { InputContain } from './styled';

const InputCustom = forwardRef((props, ref) => {
  const { placeholder, label, onChange } = props;
  const [hasLabel, setHasLabel] = useState(false);

  const onChangeInput = (data) => {
    let isLabel = false;
    if (data.target.value) {
      isLabel = true;
    }
    setHasLabel(isLabel);
    onChange(data.target.value);
  };

  return (
    //   eslint-disable-next-line
    <InputContain {...props}>
      <span className={`${hasLabel && 'show'}`}>{label}</span>
      <input
        //   eslint-disable-next-line
        {...props}
        placeholder={placeholder || label}
        ref={ref}
        onChange={onChangeInput}
      />
    </InputContain>
  );
});

export default InputCustom;

InputCustom.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  margin: PropTypes.string,
  placeholder: PropTypes.string,
};

InputCustom.defaultProps = {
  label: '',
  onChange: () => {},
  margin: '10px 0px',
  placeholder: '',
};
