import React from 'react';
import { shallow } from 'enzyme';

import AddCardForm from './index';

describe('AddCard Form', function() {
  it('renders a form tag', function() {
    expect(shallow(<AddCardForm />).exists('form')).toBe(true);
  });

  it('renders all inputs', function() {
    expect(shallow(<AddCardForm />).find('input#title').length).toBe(1);
    expect(shallow(<AddCardForm />).find('input#email').length).toBe(1);
    expect(shallow(<AddCardForm />).find('#description').length).toBe(1);
  });

  it('renders two buttons', function() {
    expect(shallow(<AddCardForm />).find('button').length).toBe(2);
  });
});
