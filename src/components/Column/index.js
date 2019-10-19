import React, { useState } from 'react';
import AddCardForm from '../AddCardForm';

import css from './index.module.css';

const MAX_CARDS_PER_COLUMN = 3;

const Column = ({ title, children, addCard }) => {
  const [showAdd, setShowAdd] = useState();
  const isFull = children && children.length >= MAX_CARDS_PER_COLUMN;
  return (
    <div className={css.column}>
      <div className={css.header}>
        <h2>{title}</h2>
        <button
          disabled={isFull}
          className={css.add}
          onClick={() => setShowAdd(true)}
        >
          +
        </button>
        {!isFull && showAdd ? (
          <AddCardForm addCard={addCard} close={() => setShowAdd(false)} />
        ) : null}
      </div>
      <ul className={css.cardList}>{children}</ul>
    </div>
  );
};

export default Column;
