import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ value, name }) => (
  <label className="form__label form__label_size-checkbox" htmlFor="userMarried">
    <div className="wrapper-checkbox">
      <div className="checkbox-select">{value}</div>
      <input name={name} className="form__input-checkbox" id="userMarried" type="checkbox" />
      <span className="slider" />
    </div>
  </label>
);

Switch.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Switch;
