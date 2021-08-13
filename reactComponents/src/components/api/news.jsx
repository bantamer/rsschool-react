import React from 'react';
import PropTypes from 'prop-types';

import './news.css';

const News = ({ news }) => (
  <a className="link" href={news.url}>
    <article className="news">
      <div className="news__lead">
        <h3 className="news__title">{news.title}</h3>
        <h6 className="news__author">
          {news.author} {news.publishedAt}
        </h6>
        <p className="news__paragraph">{news.description}</p>
      </div>
    </article>
  </a>
);

const NewsPropTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
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
