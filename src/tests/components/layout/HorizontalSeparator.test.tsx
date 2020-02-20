import React from 'react'
import HorizontalSeparator from '../../../components/layout/HorizontalSeparator'
import { render } from '@testing-library/react'

it('HorizontalSeparator renders without crashing', () => {
  const result = render(<HorizontalSeparator />)
  expect(result).toMatchSnapshot()
})
