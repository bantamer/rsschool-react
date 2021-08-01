import React from 'react';

import './form.css';
import CheckBox from './formComponents/checkbox';

import Input from './formComponents/input';
import Select from './formComponents/select';
import SubmitButton from './formComponents/submitButton';
import Switch from './formComponents/switch';

const OPTIONS = ['Male', 'Female', 'Other'];

const Form = () => {
  // const fisrtNameInput = document.getElementById('userFirstName');
  // const lastNameInput = document.getElementById('userLastName');
  // const dateOfBirthInput = document.getElementById('userDateOfBirth');
  // const telNumberInput = document.getElementById('userTelNumber');
  // const emailInput = document.getElementById('userEmail');
  // const marriedInput = document.getElementById('userMarried');
  // const sexSelect = document.getElementById('userSex');
  // const personalDataInput = document.getElementById('personalData');

  const renderUserCard = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    renderUserCard();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form form_flex">
        <Input label="First Name" id="userFirstName" placeHolder="Petr" />
        <Input label="Last Name" id="userLastName" placeHolder="Pazhitnykh" />
        <Input label="Date of Birth" id="userDateOfBirth" type="date" />
        <Input label="Mobile" id="userTelNumber" type="tel" placeHolder="+1 123 123 123" />
        <Input label="Email" id="userEmail" type="email" placeHolder="someone@email.com" />
        <Switch question="Are You Married" />
        <Select options={OPTIONS} label="Sex" id="userSex" />
        <CheckBox value=" I agree to the processing of personal data" id="personalData" />
        <SubmitButton value="submit" />
      </form>
    </div>
  );
};

export default Form;
