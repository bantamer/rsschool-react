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
      <label className="form__label" htmlFor="number">
        Number
        <input id="number" className="form__input" type="text" placeholder="+1 123 123 123" />
      </label>
      <label className="form__label" htmlFor="number">
        Email
        <input id="email" className="form__input" type="text" placeholder="someone@email.com" />
      </label>
      <label className="form__label form__label_size-checkbox" htmlFor="userAge">
        Age
        <div className="wrapper-checkbox">
          <div className="checkbox-select">Are you 18+</div>
          <input className="form__input-checkbox" id="userAge" type="checkbox" />
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

      <input className="form__button" type="submit" value="submit" />
    </form>
  </div>
);

export default Form;
