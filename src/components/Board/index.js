import React from 'react';

import css from './index.module.css';

export default function Board({ children }) {
  return <div className={css.board}>{children}</div>;
}
