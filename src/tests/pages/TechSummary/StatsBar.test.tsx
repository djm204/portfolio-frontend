import React from 'react'
import StatsBar from '../../../pages/TechSummary/StatsBar'
import { render } from '@testing-library/react'

it('TechSummary renders without crashing', () => {
  const result = render(<StatsBar name="GoLang" percentage={90} />)

  expect(result).toMatchSnapshot()
})
