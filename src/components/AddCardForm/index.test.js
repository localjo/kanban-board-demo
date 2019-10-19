import React from 'react';
import ReactDOM from 'react-dom';
import AddCardForm from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddCardForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
