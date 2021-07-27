import React from "react";

const Header = (
  <header className="header">
    <form className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Find me"
        aria-label="Search For Meaning"
      ></input>
      <button className="search__button" type="submit">
        Find
      </button>
    </form>
  </header>
);

const Hui = <h1>Privet</h1>;

export default Header;
