import React, { useState } from 'react';
import AddCardForm from '../AddCardForm';

import css from './index.module.css';

const Column = ({ title, children, addCard }) => {
  const [showAdd, setShowAdd] = useState();
  return (
    <div className={css.column}>
      <div className={css.header}>
        <h2>{title}</h2>
        <button className={css.add} onClick={() => setShowAdd(true)}>
          +
        </button>
        {showAdd ? (
          <AddCardForm addCard={addCard} close={() => setShowAdd(false)} />
        ) : null}
      </div>
      <ul className={css.cardList}>{children}</ul>
    </div>
  );
};

export default Column;
