import React, { MouseEvent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Hero = () => {
  const goToBio = (event: MouseEvent) => {
    event.preventDefault()
    const about = document.querySelector('#About')
    if (about) {
      about.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <React.Fragment>
      <div className="App__Header__Title">
        <p>
          Hello, I'm <span className="App__Header__Title__Name">David Mendez,</span>
        </p>
        <p>a full-stack Web Developer.</p>
        <div className="CheckMe" onClick={goToBio}>
          Check out my work <FontAwesomeIcon className="CheckMe__Arrow" icon="arrow-alt-down" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Hero
