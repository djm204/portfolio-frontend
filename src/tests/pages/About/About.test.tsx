import React from 'react';
import About from '../../../pages/About/About';
import { render } from '@testing-library/react';
import { HashRouter as Router} from 'react-router-dom';

it('Home renders without crashing', () => {
  render(<Router><About /></Router>);
});
