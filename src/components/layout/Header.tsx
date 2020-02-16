import React from 'react'
import Hero from '../Hero'
import '../../stylesheets/Header.css'

const Header = () => {
  return (
    <header className="App__Header">
      <div className="Swoosh--1"></div>
      <div className="Swoosh--2"></div>
      <Hero />
    </header>
  )
}

export default Header
