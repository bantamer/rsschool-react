import React from 'react';
import PropTypes from 'prop-types';

const CheckBox = ({ value, id }) => (
  <label className="form__label form__label_flex-personal" htmlFor={id}>
    {value}
    <input className="form__input-checkbox" type="checkbox" id={id} />
    <span className="custom-check" />
  </label>
);

CheckBox.propTypes = {
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default CheckBox;

//     I agree to the processing of personal data
// personalData
