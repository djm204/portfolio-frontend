import React from 'react';
import TechSummary from '../../../pages/TechSummary/TechSummary';
import { render } from '@testing-library/react';
import { HashRouter as Router} from 'react-router-dom';

it('TechSummary renders without crashing', () => {
  render(<Router><TechSummary /></Router>);
});
