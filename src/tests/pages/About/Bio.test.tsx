import React from 'react'
import Bio from '../../../pages/About/Bio'
import { render } from '@testing-library/react'

it('Bio renders without crashing', () => {
  const result = render(<Bio>Test</Bio>)
  expect(result).toMatchSnapshot()
})
