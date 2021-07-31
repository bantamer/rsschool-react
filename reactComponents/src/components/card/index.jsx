import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Card = ({ imgUrl, title, anotation }) => (
  <div className="card">
    <img className="card__image" src={imgUrl} alt={title} />
    <h3 className="card__title">{title}</h3>
    <div className="card__article">{anotation}</div>
  </div>
);

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  anotation: PropTypes.string.isRequired,
};

const CARDS = [
  { imgUrl: 'https://picsum.photos/id/237/200', title: 'Card Title', anotation: 'Anotation' },
  { imgUrl: 'https://picsum.photos/id/238/200', title: 'Card Title', anotation: 'Anotation' },
  { imgUrl: 'https://picsum.photos/id/239/200', title: 'Card Title', anotation: 'Anotation' },
  { imgUrl: 'https://picsum.photos/id/240/200', title: 'Card Title', anotation: 'Anotation' },
  { imgUrl: 'https://picsum.photos/id/241/200', title: 'Card Title', anotation: 'Anotation' },
  { imgUrl: 'https://picsum.photos/id/242/200', title: 'Card Title', anotation: 'Anotation' },
];

const Cards = () => (
  <div className="container">
    {CARDS.map((card) => (
      <Card key={card.imgUrl} imgUrl={card.imgUrl} title={card.title} anotation={card.anotation} />
    ))}
  </div>
);

export default Cards;
