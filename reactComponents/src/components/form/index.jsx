import React from 'react';

import './form.css';

const Form = () => (
  <div className="container">
    <form className="form form_flex">
      <label className="form__label" htmlFor="firstName">
        First Name
        <input id="firstName" className="form__input" type="text" placeholder="Petr" />
      </label>
      <label className="form__label" htmlFor="lastName">
        Last Name
        <input id="lastName" className="form__input" type="text" placeholder="Pazhitnykh" />
      </label>
      <label className="form__label" htmlFor="date">
        Date of birth
        <input id="date" className="form__input" type="date" />
      </label>
      <label className="form__label" htmlFor="number">
        Number
        <input id="number" className="form__input" type="tel" placeholder="+1 123 123 123" />
      </label>
      <label className="form__label" htmlFor="number">
        Email
        <input id="email" className="form__input" type="email" placeholder="someone@email.com" />
      </label>
      <label className="form__label form__label_size-checkbox" htmlFor="userMarried">
        <div className="wrapper-checkbox">
          <div className="checkbox-select"> Are You Married</div>
          <input className="form__input-checkbox" id="userMarried" type="checkbox" />
          <span className="slider" />
        </div>
      </label>
      <label className="form__label" htmlFor="userSex">
        Sex
        <select className="select">
          <option className="select__option">Male</option>
          <option className="select__option">Female</option>
          <option className="select__option">Other</option>
        </select>
      </label>
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
