import React from 'react';
import App from '../App';
import { render } from '@testing-library/react';

it('App renders without crashing', () => {
  render(<App />);
});

xtest('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
