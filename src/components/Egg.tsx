import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cnames from 'classnames'

const Egg = () => {
  const [eggClicks, setEggClicks] = useState(0)

  const eggCounter = () => {
    let currentEggClicks = eggClicks

    if (currentEggClicks < 5) {
      currentEggClicks++
      setEggClicks(currentEggClicks)
    } else {
      const eggClassToSelect = selectEggClassAtRandom(4)
      let eggElement = document.querySelector('.' + eggClassToSelect)

      eggElement?.classList.remove('Egg__Hide')
      eggElement?.classList.add('Egg__Show')

      setTimeout(() => {
        eggElement?.classList.add('Egg__Hide')
        eggElement?.classList.remove('Egg__Show')
      }, 5000)

      setEggClicks(0)
    }
  }

  const selectEggClassAtRandom = (eggCount: number): string => {
    const eggNumber = Math.floor(Math.random() * eggCount) + 1
    return 'Egg--' + eggNumber
  }

  return (
    <React.Fragment>
      <div className="EggBert" onClick={eggCounter}>
        <FontAwesomeIcon icon={'egg'} />
      </div>
      <div className="Counter"></div>
      <div className="Egg--1 Egg__Hide"></div>
      <div className="Egg--2 Egg__Hide"></div>
      <div className="Egg--3 Egg__Hide"></div>
      <div className="Egg--4 Egg__Hide"></div>
    </React.Fragment>
  )
}

export default Egg
