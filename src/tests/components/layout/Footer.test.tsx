import React from 'react'
import Footer from '../../../components/layout/Footer'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('Footer renders without crashing', () => {
  const fetchSpy = jest.spyOn(window, 'fetch')

  render(<Footer />)
  expect(fetchSpy).toBeCalled()
})
