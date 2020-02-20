import React from 'react'
import Navigation from '../../components/Navigation'
import { HashRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'

it('Navigation renders without crashing', () => {
  const result = render(
    <Router>
      <Navigation />
    </Router>
  )

  expect(result).toMatchSnapshot()
})
