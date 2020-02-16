import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cnames from 'classnames'
import '../stylesheets/Egg.css'
import '../stylesheets/Navigation.css'

import Egg from './Egg'

const Navigation = () => {
  const [fixedNav, setFixedNav] = useState()
  const [isMobile, setIsMobile] = useState()
  const [hideNav, setHideNav] = useState()

  window.addEventListener('load', () => {
    const currentScreen = checkScreenForMobile()
    setIsMobile(currentScreen)
    setHideNav(currentScreen)
  })

  window.addEventListener('resize', () => {
    const currentScreen = checkScreenForMobile()
    if (isMobile !== currentScreen) {
      setIsMobile(currentScreen)
      setHideNav(currentScreen)
    }
  })

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight - 20 && !fixedNav) setFixedNav(true)

    if (window.scrollY < window.innerHeight - 20 && fixedNav) setFixedNav(false)
  })

  const checkScreenForMobile = (): boolean => window.innerWidth < 800

  const goToSection = (event: React.MouseEvent<HTMLAnchorElement | MouseEvent>) => {
    event.preventDefault()
    const et = event.currentTarget as HTMLAnchorElement
    const target = document.querySelector(`#${et.dataset.goto}`)

    if (isMobile) {
      setHideNav(true)
    }

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const toggleNav = () => setHideNav(!hideNav)

  return (
    <React.Fragment>
      <nav className={cnames('Nav', { Nav__Fixed: fixedNav, Nav__Mobile: isMobile })}>
        <div
          onClick={toggleNav}
          className={cnames('Hamburger__MobileNav', { Nav__Hidden: !hideNav })}
        >
          <FontAwesomeIcon icon={'bars'} />
        </div>
        <div className={cnames('Nav__Links', { Nav__Hidden: hideNav })}>
          <a onClick={goToSection} href="/about" data-goto="About">
            About
          </a>
          <a onClick={goToSection} href="/tech-summary" data-goto="TechSummary">
            Tech Summary
          </a>
          <a onClick={goToSection} href="/projects" data-goto="Projects">
            Projects
          </a>
          <a onClick={goToSection} href="/contact" data-goto="Contact">
            Contact
          </a>
          <Egg />
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Navigation
