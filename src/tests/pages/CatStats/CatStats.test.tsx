import React from 'react'
import CatStats from '../../../pages/CatStats/CatStats'
import { render } from '@testing-library/react'

it('CatStats renders without crashing', () => {
  const result = render(<CatStats />)
  expect(result).toMatchSnapshot()
})
