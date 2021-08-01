import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, id, placeHolder, type }) => (
  <label className="form__label" htmlFor={id}>
    {label}
    <input id={id} className="form__input" type={type} placeholder={placeHolder} />
  </label>
);

Input.propTypes = {
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
