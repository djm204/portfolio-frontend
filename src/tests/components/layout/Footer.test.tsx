import React from 'react'
import Footer from '../../../components/layout/Footer'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it('Footer renders without crashing', () => {
  const fetchSpy = jest.spyOn(window, 'fetch')
  const thisYear = new Date().getFullYear()
  const expectedText = '©2010 - ' + thisYear + ' David Mendez'
  const result = render(<Footer />)

  expect(result).toMatchSnapshot()
  expect(screen.queryByText(expectedText)).toBeInTheDocument()
  expect(fetchSpy).toBeCalled()
})
