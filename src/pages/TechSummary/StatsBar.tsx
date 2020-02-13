import React from 'react'
import '../../stylesheets/StatsBar.css'

type StatsBarProps = {
  name: string
  percentage: number
}

const StatsBar = (props: StatsBarProps) => {
  const { name, percentage } = props

  return (
    <div className="StatsBar__Wrapper">
      <div className="StatsBar__Name">{name}</div>
      <div className="StatsBar__Container">
        <div className="StatsBar" style={{ width: percentage - 10 + '%' }}>
          {percentage + '%'}
        </div>
      </div>
    </div>
  )
}

export default StatsBar
