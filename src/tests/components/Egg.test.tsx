import React from 'react'
import Egg from '../../components/Egg'
import { render, screen, fireEvent } from '@testing-library/react'

it('Egg renders without crashing', async () => {
  const eggRender = render(<Egg />)
  expect(eggRender).toMatchSnapshot()
})

it('Egg shows a picture when clicked', async () => {
  const eggRender = render(<Egg />)
  const egg = eggRender.container

  fireEvent.click(screen.getByRole(/show-eggs/i))
  expect(egg.querySelectorAll('.Egg__Show')).toHaveLength(1)
})

it('Egg shows only 1 picture when clicked repeatedly, quickly.', async () => {
  const eggRender = render(<Egg />)
  const egg = eggRender.container

  //Spam the egg
  for (let i = 0; i < 120; i++) {
    fireEvent.click(screen.getByRole(/show-eggs/i))
  }
  expect(egg.querySelectorAll('.Egg__Show')).toHaveLength(1)
})
