import React from 'react';
import Bio from '../../../pages/About/Bio';
import { render } from '@testing-library/react';

it('Home renders without crashing', () => {
render(<Bio>Test</Bio>);
});
