import React from 'react'
import cnames from 'classnames'

type Image = {
  imgUrl: string
  altText: string
  imgClasses?: Array<string> | string
  title?: string
}

const Image = (props: Image) => {
  return (
    <div className={cnames('image-wrapper', props.imgClasses)}>
      <img src={props.imgUrl} alt={props.altText} />
    </div>
  )
}

export default Image
