import React from 'react';
import Bio from '../../../pages/Home/Bio';
import { render } from '@testing-library/react';

it('Home renders without crashing', () => {
  render(<Bio bioText="me talking about how awesome I am"/>);
});
