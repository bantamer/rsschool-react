import React from 'react';
import PropTypes from 'prop-types';

import '../index.css';

import CheckBox from '../formComponents/checkbox';
import Input from '../formComponents/input';
import Select from '../formComponents/select';
import SubmitButton from '../formComponents/submitButton';
import Switch from '../formComponents/switch';

const OPTIONS = ['Male', 'Female', 'Other'];

const Form = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const card = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      dateOfBirth: event.target.dateOfBirth.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
      sex: 'male',
      married: 'yes',
      personalData: 'yes',
    };

    onSubmit(card);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form form_flex">
        <Input name="firstName" label="First Name" id="userFirstName" placeHolder="Petr" />
        <Input name="lastName" label="Last Name" id="userLastName" placeHolder="Pazhitnykh" />
        <Input name="dateOfBirth" label="Date of Birth" id="userDateOfBirth" type="date" />
        <Input
          name="mobile"
          label="Mobile"
          id="userTelNumber"
          type="tel"
          placeHolder="+1 123 123 123"
        />
        <Input
          name="email"
          label="Email"
          id="userEmail"
          type="email"
          placeHolder="someone@email.com"
        />
        <Switch name="married" label="Are You Married" />
        <Select name="sex" options={OPTIONS} label="Sex" id="userSex" />
        <CheckBox
          name="personalData"
          label="I agree to the processing of personal data"
          id="personalData"
        />
        <SubmitButton />
      </form>
    </div>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
