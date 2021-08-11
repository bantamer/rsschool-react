import React from 'react';
import PropTypes from 'prop-types';

import './news.css';

const News = ({ news }) => (
  <a href={news.url}>
    <article className="news">
      <img className="news__image" src={news.urlToImage} alt={news.title} />
      <h3 className="news__title">{news.title}</h3>
      <p className="news__lead">{news.content}</p>
    </article>
  </a>
);

const NewsPropTypes = {
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

News.propTypes = {
  news: PropTypes.shape(NewsPropTypes).isRequired,
};

const NewsList = ({ articles }) => (
  <div className="container">
    {articles.map((article) => (
      <News key={article.title} news={article} />
    ))}
  </div>
);

NewsList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(NewsPropTypes)).isRequired,
};

export default NewsList;
