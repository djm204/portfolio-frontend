import React from 'react';
import { ContactInfoRow } from '../../../pages/Contact/ContactInfoRow';
import { render } from '@testing-library/react';

it('Contact renders without crashing', () => {
    const contactRowInfo = {
        type: 'facebookTest',
        iconClass: 'fab facebook',
        contactProfileUrl: 'facebookTest'
    }
    const { getByText } = render(<ContactInfoRow {...contactRowInfo} />);

    expect(getByText('facebookTest')).toBeInTheDocument();
});

