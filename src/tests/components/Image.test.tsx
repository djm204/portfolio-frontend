import React from 'react'
import Image from '../../components/Image'
import { render } from '@testing-library/react'

it('Image renders without crashing', () => {
  render(<Image imgUrl="aSource" altText="altText" />)
})
