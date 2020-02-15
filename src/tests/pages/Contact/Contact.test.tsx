import React from 'react'
import Contact from '../../../pages/Contact/Contact'
import { render } from '@testing-library/react'

it('Contact renders without crashing', async () => {
  render(<Contact />)
})
