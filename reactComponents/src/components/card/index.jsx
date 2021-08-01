import React from 'react';
import PropTypes from 'prop-types';

import './card.css';

const Card = ({ imgUrl, title, anotation, cost }) => (
  <div className="card">
    <img className="card__image" src={imgUrl} alt={title} />
    <h3 className="card__title">{title}</h3>
    <div className="card__article">
      <div className="card__anotation">{anotation}</div>
      <div className="card__cost">{cost}</div>
      <button type="button" className="card__button">
        buy now for {cost}
      </button>
    </div>
  </div>
);

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  anotation: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
};

const CARDS = [
  {
    imgUrl: 'https://picsum.photos/id/237/200',
    title: 'pes',
    anotation: 'you can buy the rights to this picture for:',
    cost: '♂three♂hundred♂bucks♂',
  },
  {
    imgUrl: 'https://picsum.photos/id/238/200',
    title: 'NY',
    anotation: 'you can buy the rights to this picture for:',
    cost: '♂three♂hundred♂bucks♂',
  },
  {
    imgUrl: 'https://picsum.photos/id/239/200',
    title: 'oduvan',
    anotation: 'you can buy the rights to this picture for:',
    cost: '♂three♂hundred♂bucks♂',
  },
  {
    imgUrl: 'https://picsum.photos/id/240/200',
    title: 'sadboy on lestnica',
    anotation: 'you can buy the rights to this picture for:',
    cost: '♂three♂hundred♂bucks♂',
  },
  {
    imgUrl: 'https://picsum.photos/id/241/200',
    title: 'Belarus (on the right)',
    anotation: 'you can buy the rights to this picture for:',
    cost: '80,1%',
  },
  {
    imgUrl: 'https://picsum.photos/id/242/200',
    title: 'road',
    anotation: 'you can buy the rights to this picture for:',
    cost: '♂three♂hundred♂bucks♂',
  },
];

const Cards = () => (
  <div className="container container_flex-cards">
    {CARDS.map((card) => (
      <Card
        key={card.imgUrl}
        imgUrl={card.imgUrl}
        title={card.title}
        anotation={card.anotation}
        cost={card.cost}
      />
    ))}
  </div>
);

export default Cards;
