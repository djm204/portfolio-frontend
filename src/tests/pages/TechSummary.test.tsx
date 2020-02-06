import React from 'react';
import ReactDOM from 'react-dom';
import TechSummary from '../../pages/TechSummary';

it('TechSummary renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TechSummary />, div);
});
