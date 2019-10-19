import React, { useState } from 'react';
import AddCardForm from '../AddCardForm';

const Column = ({ title, children, addCard }) => {
  const [showAdd, setShowAdd] = useState();
  return (
    <>
      <h2>{title}</h2>
      <button onClick={() => setShowAdd(true)}>+</button>
      {showAdd ? (
        <AddCardForm addCard={addCard} close={() => setShowAdd(false)} />
      ) : null}
      <ul>{children}</ul>
    </>
  );
};

export default Column;
