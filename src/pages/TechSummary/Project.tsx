import React from 'react'
import cnames from 'classnames'

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
  const {
    role,
    name,
    link,
    points,
    className,
    imgSrc,
    dataAos,
    dataAosDuration,
    dataAosEasing,
    dataAosOnce,
  } = props
  const showElements = () => {
    const container = document.querySelector(`#${className}`)
    const backgroundImage = container?.querySelector('.Project__Image')
    let hiddenElements = [].slice.call(container?.querySelectorAll('.Project--hidden'))

    hiddenElements.forEach((element: Element) => element.classList.remove('Project--hidden'))
    hiddenElements.forEach((element: Element) => element.classList.add('Project--SlideIn'))
    backgroundImage?.classList.remove('Project--visible')
    backgroundImage?.classList.add('Project--hidden')
  }

  const hideElements = () => {
    const container = document.querySelector(`#${className}`)
    const backgroundImage = container?.querySelector('.Project__Image')
    let visibleElements = [].slice.call(container?.querySelectorAll('.Project--SlideIn'))

    visibleElements.forEach((element: Element) => element.classList.add('Project--hidden'))
    visibleElements.forEach((element: Element) => element.classList.remove('Project--SlideIn'))
    backgroundImage?.classList.remove('Project--hidden')
    backgroundImage?.classList.add('Project--visible')
  }
  return (
    <div
      id={className}
      className={cnames('Project', className)}
      data-aos={dataAos}
      data-aos-duration={dataAosDuration}
      data-aos-easing={dataAosEasing}
      data-aos-once={dataAosOnce}
      onMouseEnter={() => showElements()}
      onMouseLeave={() => hideElements()}
    >
      <div className="Project__Details">
        <h3
          className="Project__Name Project--hidden"
          data-aos-duration={dataAosDuration}
          data-aos-easing={dataAosEasing}
        >
          {name}
        </h3>
        <div className="Project__Role Project--hidden">{role}</div>
        <ul className="Project__Notables Project--hidden">
          {typeof points !== 'string' ? (
            points.map(point => <li key={point}>{point}</li>)
          ) : (
            <li>{points}</li>
          )}
        </ul>
        <div className="Project__Link__Wrapper">
          {link === 'NPA' ? (
            <span className="Project__NotPublic Project--hidden">*Not Publicly Available</span>
          ) : (
            <a
              href={link}
              rel="noopener noreferrer"
              target="_blank"
              className="Project__Link Project--hidden"
            >
              View Project
            </a>
          )}
        </div>
      </div>
      <img className="Project__Image" alt={name} src={imgSrc} />
    </div>
  )
}

export default Project
