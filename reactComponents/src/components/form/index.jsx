import React from 'react';

import './form.css';

import Input from './formComponents/input';
import Select from './formComponents/select';

const OPTIONS = [
  {
    optionValue: 'Male',
    optionClass: 'select__option',
  },
  {
    optionValue: 'Female',
    optionClass: 'select__option',
  },
  {
    optionValue: 'Other',
    optionClass: 'select__option',
  },
];

const Form = () => (
  <div className="container">
    <form className="form form_flex">
      <Input
        inputClass="form__input"
        labelClass="form__label"
        labelValue="First Name"
        id="firstName"
        placeHolder="Petr"
      />
      <Input
        inputClass="form__input"
        labelClass="form__label"
        labelValue="Last Name"
        id="lastName"
        placeHolder="Pazhitnykh"
      />
      <Input
        inputClass="form__input"
        labelClass="form__label"
        labelValue="Date of Birth"
        id="dateOfBirth"
        inputType="date"
      />
      <Input
        inputClass="form__input"
        labelClass="form__label"
        labelValue="Mobile"
        id="telNumber"
        inputType="tel"
        placeHolder="+1 123 123 123"
      />
      <Input
        inputClass="form__input"
        labelClass="form__label"
        labelValue="Email"
        id="email"
        inputType="email"
        placeHolder="someone@email.com"
      />
      <label className="form__label form__label_size-checkbox" htmlFor="userMarried">
        <div className="wrapper-checkbox">
          <div className="checkbox-select"> Are You Married</div>
          <input className="form__input-checkbox" id="userMarried" type="checkbox" />
          <span className="slider" />
        </div>
      </label>
      <Select
        options={OPTIONS}
        selectClass="select"
        labelValue="Sex"
        labelClass="form__label"
        id="userSex"
      />
      <label className="form__label form__label_flex-personal" htmlFor="personalData">
        I agree to the processing of personal data
        <input className="form__input-checkbox" type="checkbox" id="personalData" />
        <span className="custom-check" />
      </label>

      <input className="form__button" type="submit" value="submit" />
    </form>
  </div>
);

export default Form;
