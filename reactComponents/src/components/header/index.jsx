import React from 'react';

import './header.css';

const Header = () => (
  <header className="header">
    <h2 className="header__title">Welcome to the Internet please folow me...</h2>
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Find me"
        aria-label="Search For Meaning"
      />
      <button className="search__button" type="submit">
        Find
      </button>
    </form>
  </header>
);

export default Header;
