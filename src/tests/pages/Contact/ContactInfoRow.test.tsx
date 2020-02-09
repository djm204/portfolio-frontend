import React from 'react';
import { ContactInfoRow } from '../../../pages/Contact/ContactInfoRow';
import { render } from '@testing-library/react';

it('Contact renders without crashing', () => {
    const contactRowInfo = {
        type: 'facebookTest',
        iconClass: 'facebookTest',
        contactProfileUrl: 'facebookTest'
    }
    render(<ContactInfoRow {...contactRowInfo} />);
});

