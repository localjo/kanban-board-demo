import React, { useState } from 'react';

import css from './index.module.css';

function AddCardForm({ addCard, close }) {
  const [values, setValues] = useState({
    title: '',
    description: '',
    email: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    addCard(values);
    close();
  };
  return (
    <form onSubmit={handleSubmit} className={css.cardForm}>
      <label htmlFor="title">Title</label>
      <input
        autoFocus
        name="title"
        id="title"
        value={values.title}
        onChange={e => setValues({ ...values, title: e.target.value })}
      />
      <label htmlFor="user">Email</label>
      <input
        name="email"
        id="email"
        value={values.email}
        onChange={e => setValues({ ...values, email: e.target.value })}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        value={values.description}
        onChange={e => setValues({ ...values, description: e.target.value })}
      />
      <div className={css.buttonRow}>
        <button onClick={close}>Cancel</button>
        <button onClick={handleSubmit} className={css.saveButton}>
          Save task
        </button>
      </div>
    </form>
  );
}

export default AddCardForm;
