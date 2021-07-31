import React from 'react';

import './form.css';

const Form = () => (
  <div className="container">
    <form className="form">
      <label className="form__label" htmlFor="firstName">
        First Name
        <input id="firstName" className="form__input" type="text" />
      </label>
      <label className="form__label" htmlFor="lastName">
        Last Name
        <input id="lastName" className="form__input" type="text" />
      </label>
      <label className="form__label" htmlFor="number">
        Number
        <input id="number" className="form__input" type="text" />
      </label>
      <label className="form__label" htmlFor="number">
        Email
        <input id="email" className="form__input" type="text" />
      </label>

      <input type="submit" />
    </form>
  </div>
);

export default Form;
