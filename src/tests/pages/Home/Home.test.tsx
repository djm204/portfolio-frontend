import React from 'react';
import Home from '../../../pages/Home/Home';
import { render } from '@testing-library/react';
import { HashRouter as Router} from 'react-router-dom';

it('Home renders without crashing', () => {
  render(<Router><Home /></Router>);
});
