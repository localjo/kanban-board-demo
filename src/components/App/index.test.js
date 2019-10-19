import React from 'react';
import ReactDOM from 'react-dom';
import App, { addCard } from '.';

const card1 = {
  title: 'Card One',
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
});
