import React from 'react';

import useLocalStorage from '../../utils/useLocalStorage';
import Header from '../Header';
import Board from '../Board';
import Card from '../Card';
import Column from '../Column';

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
  return (
    <>
      <Header />
      <Board>
        {columns.map(column => {
          return (
            <Column key={column} title={column}>
              {cards[column].map(card => (
                <Card {...card} key={card.title} />
              ))}
            </Column>
          );
        })}
      </Board>
    </>
  );
}

export default App;
