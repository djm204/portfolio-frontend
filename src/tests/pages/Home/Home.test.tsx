import React from 'react';
import Home from '../../../pages/Home/Home';
import { render } from '@testing-library/react';

it('Home renders without crashing', () => {
  render(<Home />);
});
