import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import AddCardForm from '../AddCardForm';
import useWhyDidYouUpdate from '../../utils/useWhyDidYouUpdate';

import css from './index.module.css';

const MAX_CARDS_PER_COLUMN = 100;

const Column = props => {
  const { title, children, addCard, changeCardColumn, columns } = props;
  useWhyDidYouUpdate('Card', props);
  const [showAdd, setShowAdd] = useState();
  const isFull = children && children.length >= MAX_CARDS_PER_COLUMN;
  const accept = columns.filter(c => c !== title).map(c => 'card-' + c);
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept,
    drop(item) {
      if (!ref.current) return;
      if (item.column === title) return;
      changeCardColumn(item.index, item.column, title);
      item.column = title;
    },
  });
  drop(ref);
  return (
    <div className={css.column} ref={ref}>
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
