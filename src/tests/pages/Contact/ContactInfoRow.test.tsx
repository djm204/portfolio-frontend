import React from 'react'
import { SocialMediaRow } from '../../../components/SocialMedia'
import { render, getByAltText } from '@testing-library/react'

it('Contact renders without crashing', () => {
  const contactRowInfo = {
    type: 'facebookTest',
    iconClass: 'fab facebook',
    contactProfileUrl: 'facebookTest',
  }
  const { getByText } = render(<SocialMediaRow {...contactRowInfo} />)

  // expect(getByAltText('a')).toBeInTheDocument()
})
