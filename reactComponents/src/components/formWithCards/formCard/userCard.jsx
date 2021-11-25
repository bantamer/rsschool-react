import React from 'react';
import PropTypes from 'prop-types';

import './userCard.css';

const UserCard = ({ card }) => (
  <div className="card card_size">
    <h3 className="card__title">
      {card.firstName} {card.lastName}
    </h3>
    <div className="card__article">
      <div className="card__anotation card__annotation_size">
        email: <strong>{card.email}</strong>
      </div>
      <div className="card__anotation card__annotation_size">
        mobile: <strong>{card.mobile}</strong>
      </div>
      <div className="card__anotation card__annotation_size">
        date of birth: <strong>{card.dateOfBirth}</strong>
      </div>
      <div className="card__anotation card__annotation_size">
        married: <strong>{card.married}</strong>
      </div>
      <div className="card__anotation card__annotation_size">
        sex: <strong>{card.sex}</strong>
      </div>
      <div className="card__anotation card__annotation_size">
        CPPD: <strong>{card.personalData}</strong>
      </div>
    </div>
  </div>
);

const CardPropType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  mobile: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  married: PropTypes.string.isRequired,
  sex: PropTypes.string.isRequired,
  personalData: PropTypes.string.isRequired,
};

UserCard.propTypes = {
  card: PropTypes.shape(CardPropType).isRequired,
};

const CardsList = ({ cards }) => (
  <div className="container container_flex-cards">
    {cards.map((card) => (
      <UserCard key={card.id} card={card} />
    ))}
  </div>
);

CardsList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape(CardPropType)).isRequired,
};

export default CardsList;
