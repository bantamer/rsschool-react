import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ labelClass, inputClass, labelValue, id, placeHolder, inputType }) => (
  <label className={labelClass} htmlFor={id}>
    {labelValue}
    <input id={id} className={inputClass} type={inputType} placeholder={placeHolder} />
  </label>
);

Input.propTypes = {
  inputClass: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  inputType: PropTypes.string,
};

Input.defaultProps = {
  placeHolder: '',
  inputType: 'text',
};

export default Input;
