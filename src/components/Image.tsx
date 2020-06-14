import React from 'react'
import cnames from 'classnames'

export type ImageProps = {
  imgUrl: string
  altText: string
  imgClasses?: Array<string> | string
  title?: string
}

const Image = (props: ImageProps) => {
  return (
    <div className={cnames('image-wrapper', props.imgClasses)}>
      <img src={props.imgUrl} alt={props.altText} />
    </div>
  )
}

export default Image
