import React from 'react';
import ReactDOM from 'react-dom';
import CatStats from '../../pages/CatStats';

it('CatStats renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CatStats />, div);
});
