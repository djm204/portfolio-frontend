import React from 'react'
import { InfoSection } from '../../../components/layout/InfoSection'
import { render, screen } from '@testing-library/react'

it('InfoSection with props, renders as expected.', () => {
  const childText = 'Hey Mayne, this be some child text yo'
  const infoSectionProps = {
    id: 'testId',
    classnames: ['class1', 'class2'],
  }

  const result = render(<InfoSection {...infoSectionProps}>{childText}</InfoSection>)

  expect(result).toMatchSnapshot()
  expect(screen.queryByText(childText)).toBeInTheDocument()
  expect(result.container.querySelector('#' + infoSectionProps.id)).toBeInTheDocument()
  infoSectionProps.classnames.forEach(classname => {
    expect(result.container.querySelector('.' + classname)).toBeInTheDocument()
  })
})

it('InfoSection renders without crashing', () => {
  const result = render(<InfoSection>hi</InfoSection>)
})
