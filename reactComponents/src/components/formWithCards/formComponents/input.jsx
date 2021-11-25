import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, id, placeHolder, type, name }) => (
  <label className="form__label" htmlFor={id}>
    {label}
    <input name={name} id={id} className="form__input" type={type} placeholder={placeHolder} />
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  placeHolder: '',
  type: 'text',
};

export default Input;
