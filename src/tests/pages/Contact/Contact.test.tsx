import React, { useState } from 'react';
import Contact from '../../../pages/Contact/Contact';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

it('Contact renders without crashing', async () => {
  const fetchSpy = jest.spyOn(window, 'fetch');

  render(<Contact />);
  expect(fetchSpy).toBeCalled();
});

