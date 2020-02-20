import React from 'react'
import Contact from '../../../pages/Contact/Contact'
import { render } from '@testing-library/react'

it('Contact renders without crashing', () => {
  const result = render(<Contact />)
  expect(result).toMatchSnapshot()
})
