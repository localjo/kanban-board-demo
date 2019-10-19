import React, { useCallback } from 'react';

import useLocalStorage from '../../utils/useLocalStorage';
import Header from '../Header';
import Board from '../Board';
import Card from '../Card';
import Column from '../Column';

import css from './index.module.css';

export const addCard = (state, card) => {
  return {
    ...state,
    [card.column]: [...state[card.column], card],
  };
};

export const sortCards = (state, currentIndex, hoverIndex, column) => {
  const sortedCards = [...state[column]];
  sortedCards.splice(currentIndex, 1);
  sortedCards.splice(hoverIndex, 0, state[column][currentIndex]);
  return { ...state, [column]: sortedCards };
};

export const changeColumn = (state, index, sourceColumn, column) => {
  const newSource = [...state[sourceColumn]];
  newSource.splice(index, 1);
  return {
    ...state,
    [sourceColumn]: newSource,
    [column]: [...state[column], { ...state[sourceColumn][index], column }],
  };
};

function App() {
  const [cards, setCards] = useLocalStorage({
    'To do': [
      { title: 'Three', description: 'Test card 3', email: 'me@example.com' },
    ],
    'In progress': [
      { title: 'Two', description: 'Test card 2', email: 'me@example.com' },
    ],
    Done: [
      { title: 'One', description: 'Test card 1', email: 'me@example.com' },
    ],
  });
  const columns = Object.keys(cards);

  const setNewCard = useCallback(c => setCards(addCard(cards, c)), [
    cards,
    setCards,
  ]);

  const setSort = useCallback((...a) => setCards(sortCards(cards, ...a)), [
    cards,
    setCards,
  ]);

  const setColumn = useCallback((...a) => setCards(changeColumn(cards, ...a)), [
    cards,
    setCards,
  ]);

  return (
    <div className={css.appContainer}>
      <Header />
      <Board>
        {columns.map(column => {
          return (
            <Column
              key={column}
              title={column}
              columns={columns}
              addCard={card => setNewCard({ ...card, column })}
              changeCardColumn={setColumn}
            >
              {cards[column].map((card, i) => (
                <Card
                  {...card}
                  key={card.title}
                  column={column}
                  index={i}
                  sortCard={setSort}
                />
              ))}
            </Column>
          );
        })}
      </Board>
    </div>
  );
}

export default App;
