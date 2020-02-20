import React from 'react'
import About from '../../../pages/About/About'
import { render } from '@testing-library/react'
import { HashRouter as Router } from 'react-router-dom'

it('About renders without crashing', () => {
  const result = render(
    <Router>
      <About />
    </Router>
  )
  expect(result).toMatchSnapshot()
})
