import React, { useState } from 'react'
import cnames from 'classnames'
import '../../stylesheets/Project.css'

type ProjectProps = {
  name: string
  link: string
  imgSrc: string
  points: Array<string> | string
  role: string
  className: string
  dataAos?: string
  dataAosDuration?: string
  dataAosEasing?: string
  dataAosOnce?: string
}

const Project = (props: ProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { role, name, link, points, className, imgSrc, dataAosDuration, dataAosEasing } = props

  const handleClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (event) event.persist()
    setIsExpanded(!isExpanded)
  }

  return (
    <div id={className} className={cnames('Project', className)}>
      <div
        onClick={handleClick}
        className={cnames('ExpandedProjectImageBackground', { '--expanded': isExpanded })}
      >
        <div className="Project__Image__Wrapper__Expanded">
          <img className="Project__Image__Expanded" alt={name} src={imgSrc} />
        </div>
      </div>
      <img onClick={handleClick} className={cnames('Project__Image')} alt={name} src={imgSrc} />

      <div className={cnames('Project__Details', { '--expanded': isExpanded })}>
        <h3
          className="Project__Name "
          data-aos-duration={dataAosDuration}
          data-aos-easing={dataAosEasing}
        >
          {name}
        </h3>
        <div className="Project__Role ">{role}</div>
        <ul className="Project__Notables ">
          {typeof points !== 'string' ? (
            points.map(point => <li key={point}>{point}</li>)
          ) : (
            <li>{points}</li>
          )}
        </ul>
        <div className="Project__Link__Wrapper">
          {link === 'NPA' ? (
            <span className="Project__NotPublic ">*Not Publicly Available</span>
          ) : (
            <a href={link} rel="noopener noreferrer" target="_blank" className="Project__Link">
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
