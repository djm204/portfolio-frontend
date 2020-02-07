import React from 'react';
import CatStats from '../../pages/CatStats';
import { render } from '@testing-library/react';

it('CatStats renders without crashing', () => {
  render(<CatStats />);
});
