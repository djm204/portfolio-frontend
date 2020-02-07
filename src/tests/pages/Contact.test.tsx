import React from 'react';
import Contact from '../../pages/Contact';
import { render } from '@testing-library/react';

it('Contact renders without crashing', () => {
  render(<Contact />);
});

