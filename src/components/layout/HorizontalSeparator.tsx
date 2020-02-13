import React, { FunctionComponent } from 'react'
import cnames from 'classnames'

type HorizontalSeparatorProps = {
  classnames?: string | Array<string>
}

const HorizontalSeparator: FunctionComponent<HorizontalSeparatorProps> = (
  props: HorizontalSeparatorProps
) => {
  const { classnames } = props

  return <div className={cnames('HorizontalSeparator', classnames)}></div>
}

export default HorizontalSeparator
