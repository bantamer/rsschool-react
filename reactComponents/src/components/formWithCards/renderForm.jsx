import React, { useState } from 'react';

import Form from './form/form';
import RenderCards from './formCard/userCard';

const FormWithCards = () => {
  const [cards, setCards] = useState([]);
  return (
    <>
      <Form
        onSubmit={(card) => {
          setCards(cards.concat({ ...card, id: cards.length }));
        }}
      />
      <RenderCards cards={cards} />
    </>
  );
};

export default FormWithCards;
