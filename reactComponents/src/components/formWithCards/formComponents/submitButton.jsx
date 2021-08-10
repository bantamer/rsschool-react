import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ value }) => <input className="form__button" type="submit" value={value} />;

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SubmitButton;
