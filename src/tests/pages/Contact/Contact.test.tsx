import React from 'react';
import Contact from '../../../pages/Contact/Contact';
import { render } from '@testing-library/react';

it('Contact renders without crashing', () => {
  const contactInfo = [
    {
      type: 'facebook',
      iconClass: 'facebook',
      contactProfileUrl: 'facebook.com'
    },
    {
      type: 'email',
      iconClass: 'mail',
      contactProfileUrl: 'mailto:me@davidmendez.dev'
    }
  ]
  render(<Contact contactInfo={contactInfo} />);
});

