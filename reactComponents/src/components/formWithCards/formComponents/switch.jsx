import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ label, name }) => (
  <label className="form__label form__label_size-checkbox" htmlFor="userMarried">
    <div className="wrapper-checkbox">
      <div className="checkbox-select">{label}</div>
      <input name={name} className="form__input-checkbox" id="userMarried" type="checkbox" />
      <span className="slider" />
    </div>
  </label>
);

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Switch;
