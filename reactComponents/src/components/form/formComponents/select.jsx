import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = ({ option }) => <option className="select__option">{option}</option>;

SelectOption.propTypes = {
  option: PropTypes.string.isRequired,
};

const Select = ({ options, label, id }) => (
  <label className="form__label" htmlFor={id}>
    {label}
    <select className="select" id={id}>
      {options.map((option) => (
        <SelectOption key={option} option={option} />
      ))}
    </select>
  </label>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
