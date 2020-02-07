import React from 'react';
import Header from '../../components/layout/Header';
import { HashRouter as Router} from 'react-router-dom';
import { render } from '@testing-library/react';

it('Header renders without crashing', () => {
  render(<Router><Header /></Router>);
});
