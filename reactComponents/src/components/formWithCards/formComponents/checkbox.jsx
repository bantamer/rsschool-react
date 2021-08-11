import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ label, id, name }) => (
  <label name={name} className="form__label form__label_flex-personal" htmlFor={id}>
    {label}
    <input className="form__input-checkbox" type="checkbox" id={id} />
    <span className="custom-check" />
  </label>
);

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckBox;
