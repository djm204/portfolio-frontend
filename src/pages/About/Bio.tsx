import React, { ReactNode } from 'react'

type BioProps = {
  children: ReactNode
}

const Bio = (props: BioProps) => {
  return (
    <div className="WriteUp">
      <h2>About David</h2>
      {props.children}
    </div>
  )
}

export default Bio
