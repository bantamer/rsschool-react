import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ({ option, name }) => (
  <option name={name} className="select__option">
    {option}
  </option>
);

SelectOption.propTypes = {
  name: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
};

const Select = ({ options, label, id, name }) => (
  <label className="form__label" htmlFor={id}>
    {label}
    <select className="select" id={id}>
      {options.map((option) => (
        <SelectOption name={name} key={option} option={option} />
      ))}
    </select>
  </label>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
