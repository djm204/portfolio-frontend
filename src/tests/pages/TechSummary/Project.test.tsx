import React from 'react'
import Project from '../../../pages/TechSummary/Project'
import { render, fireEvent } from '@testing-library/react'

it('Project renders without crashing', () => {
  const result = render(
    <Project
      name="GoLang"
      link="https://someproject.com"
      imgExpandedSrc="imgSrcExp"
      imgSrc="imgSrc"
      role="bestRole"
      className="classy"
      points={[]}
    />
  )

  expect(result).toMatchSnapshot()
})

it('Expanded Image renders image when Project Image is clicked', () => {
  const result = render(
    <Project
      name="GoLang"
      link="https://someproject.com"
      imgExpandedSrc="imgSrcExp"
      imgSrc="imgSrc"
      role="bestRole"
      className="classy"
      points={[]}
    />
  )
  const project = result.container
  const projectImage = project.querySelector('.Project__Image')

  fireEvent.click(projectImage as Element | Document | Window)

  expect(project.querySelectorAll('.ExpandedProjectImageBackground.--expanded')).toHaveLength(1)
})
