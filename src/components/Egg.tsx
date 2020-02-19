import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../components/Image'
import { selectEggClassAtRandom } from './componentHelpers/EggHelper'

const Egg = () => {
  const [showFriedEgg, setShowFriedEgg] = useState(false)
  const [alreadyShown, setAlreadyShown] = useState([])

  const showEgg = () => {
    const eggClassToSelect = selectEggClassAtRandom(alreadyShown)
    alreadyShown.push(eggClassToSelect as never)
    setAlreadyShown(alreadyShown)

    let eggElement = document.querySelector(eggClassToSelect)
    setShowFriedEgg(true)

    eggElement?.classList.remove('Egg__Hide')
    eggElement?.classList.add('Egg__Show')

    setTimeout(() => {
      eggElement?.classList.add('Egg__Hide')
      eggElement?.classList.remove('Egg__Show')
      setShowFriedEgg(false)
    }, 3000)

    if (alreadyShown.length >= 4) {
      setAlreadyShown([])
    }
  }

  const iconClass = showFriedEgg ? 'egg-fried' : 'egg'

  return (
    <React.Fragment>
      <button className="EggBert" onClick={showEgg} disabled={showFriedEgg}>
        <FontAwesomeIcon icon={iconClass} />
      </button>
      <div className="Egg Egg--1 Egg__Hide">
        <Image
          imgUrl="https://davidmendez.dev/i_love_to_festival.jpg"
          altText="I love to festival"
        />
      </div>
      <div className="Egg Egg--2 Egg__Hide">
        <Image imgUrl="https://davidmendez.dev/i_love_to_garden.jpg" altText="I love to garden" />
      </div>
      <div className="Egg Egg--3 Egg__Hide">
        <Image imgUrl="https://davidmendez.dev/i_love_my_cats.jpg" altText="I love my cats" />
      </div>
      <div className="Egg Egg--4 Egg__Hide">
        <Image imgUrl="https://davidmendez.dev/me_and_my_love.jpg" altText="My love and I" />
      </div>
    </React.Fragment>
  )
}

export default Egg
