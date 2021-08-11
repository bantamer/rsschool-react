import React, { useState } from 'react';

import Form from './form/form';
import CardsList from './formCard/userCard';

const FormWithCards = () => {
  const [cards, setCards] = useState([]);
  return (
    <>
      <Form
        onSubmit={(card) => {
          setCards(cards.concat({ ...card, id: cards.length }));
        }}
      />
      <CardsList cards={cards} />
    </>
  );
};

export default FormWithCards;
