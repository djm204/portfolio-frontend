import React from 'react';
import TechSummary from '../../pages/TechSummary';
import { render } from '@testing-library/react';

it('TechSummary renders without crashing', () => {
  render(<TechSummary />,);
});
