import React from 'react';
import PropTypes, { object, string } from 'prop-types';

const SelectOption = ({ optionClass, optionValue }) => (
  <option className={optionClass}>{optionValue}</option>
);

SelectOption.propTypes = {
  optionClass: PropTypes.string.isRequired,
  optionValue: PropTypes.string.isRequired,
};

const Select = ({ options, selectClass, labelValue, labelClass, id }) => (
  <label className={labelClass} htmlFor={id}>
    {labelValue}
    <select className={selectClass} id={id}>
      {options.map((option) => (
        <SelectOption
          key={option.optionValue}
          optionClass={option.optionClass}
          optionValue={option.optionValue}
        />
      ))}
    </select>
  </label>
);

Select.propTypes = {
  selectClass: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  labelClass: PropTypes.string.isRequired,
  labelValue: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Select;
