import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import css from './index.module.css';

export default function Board({ children }) {
  return (
    <div className={css.board}>
      <DndProvider backend={HTML5Backend}>{children}</DndProvider>
    </div>
  );
}
