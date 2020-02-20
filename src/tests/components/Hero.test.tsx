import React from 'react'
import Hero from '../../components/Hero'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'

it('Hero renders without crashing', () => {
  const result = render(
    <Router>
      <Hero />
    </Router>
  )

  expect(result).toMatchSnapshot()
  expect(screen.queryByText("Hello, I'm")).toBeInTheDocument()
  expect(screen.queryByText('David Mendez,')).toBeInTheDocument()
  expect(screen.queryByText('a full-stack Web Developer.')).toBeInTheDocument()
  expect(screen.queryByText('Check out my work')).toBeInTheDocument()
})

it("Hero 'Check out my work' sends you to #About", () => {
  const result = render(
    <Router>
      <Hero />
    </Router>
  )

  expect(result.container.querySelector('#About')).toBeNull
  fireEvent.click(screen.getByText('Check out my work'))
  expect(result.container.querySelector('#About')).not.toBeNull
})
