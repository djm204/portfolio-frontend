import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import NextButton from '../../components/NextButton'

it('NextButton renders without crashing', () => {
  const result = render(
    <Router>
      <NextButton linkUrl="/test" buttonLabel="HeyThereNextButton" />
    </Router>
  )

  expect(result).toMatchSnapshot()
})
