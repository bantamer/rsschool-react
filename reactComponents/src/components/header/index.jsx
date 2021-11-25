import axios from 'axios';
import React, { useState } from 'react';
import { API_KEY } from '../api/api';
import NewsList from '../api/news';

import './header.css';

const Header = () => {
  const [arts, setArts] = useState([]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${event.target.searchInput.value}&apiKey=${API_KEY}&pageSize=10`
      );

      setArts(response.data.articles);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <header className="header">
        <h2 className="header__title">Welcome to the Internet please folow me...</h2>
        <form onSubmit={handleSubmit} className="search">
          <input
            name="searchInput"
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
      <NewsList articles={arts} />
    </>
  );
};

export default Header;
