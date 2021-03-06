import React from 'react'
import Header from '../../../components/layout/Header'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

it('Header renders without crashing', () => {
  const result = render(
    <Router>
      <Header />
    </Router>
  )
  expect(result).toMatchSnapshot()
})
