import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import { SocialMediaRow } from '../../components/SocialMedia'

it('SocialMedia renders without crashing', () => {
  const socialMediaData = [
    {
      type: 'linkedIn',
      iconClass: 'linkedIn',
      contactProfileUrl: 'linkedIn.com/in/djm204',
    },
    {
      type: 'email',
      iconClass: 'mail',
      contactProfileUrl: 'mailto:me@davidmendez.dev',
    },
    {
      type: 'some-super-hip-and-new-social-media',
      iconClass: 'some-super-hip-and-cool-icon',
      contactProfileUrl: 'some-super-hip-and-cool.com/profile',
    },
  ]

  const result = render(
    <Router>
      {socialMediaData.map(social => (
        <SocialMediaRow key={JSON.stringify(social)} {...social} />
      ))}
    </Router>
  )

  expect(result).toMatchSnapshot()
  socialMediaData.forEach(social => {
    expect(screen.getByTitle(social.type)).toBeInTheDocument
  })
})
