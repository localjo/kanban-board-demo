import React from 'react';
import ReactDOM from 'react-dom';
import App, { addCard, sortCards } from '.';

const card1 = {
  title: 'Card One',
  user: 'example@example.com',
  description: 'Test card',
  column: 'To do',
};
const card2 = {
  title: 'Card Two',
  user: 'example@example.com',
  description: 'Test card',
  column: 'To do',
};
const card3 = {
  title: 'Card Three',
  user: 'example@example.com',
  description: 'Test card',
  column: 'To do',
};

describe('App Wrapper', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('correctly adds a card to the state', function() {
    const state = {
      'To do': [],
      'In progress': [],
      Done: [],
    };
    expect(addCard(state, card1)).toMatchSnapshot();
  });

  it('correctly sorts cards in the state', function() {
    const state = {
      'To do': [card1, card2, card3],
      'In progress': [],
      Done: [],
    };
    expect(sortCards(state, 0, 2, 'To do')).toMatchSnapshot();
  });
});
