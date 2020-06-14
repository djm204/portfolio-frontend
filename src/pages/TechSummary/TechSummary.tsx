import React, { useState, useEffect, FunctionComponent } from 'react'
import { InfoSection } from '../../components/layout/InfoSection'
import Project from './Project'
import Image from '../../components/Image'
import '../../stylesheets/TechSummary.css'
import { skills, projects } from './dataSource'
import HorizontalSeparator from '../../components/layout/HorizontalSeparator'
import { get } from '../../helpers/api'

const TechSummary: FunctionComponent = () => {
  const [techImages, setTechImages] = useState()

  //ComponentDidMount
  useEffect(() => {
    get({ url: '/api/techImages' })
      .then((techImages) => setTechImages(JSON.parse(techImages)))
      .catch((err: any) => console.error(err))
  }, [])

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      id="TechSummary"
      className="TechSummaryPage"
    >
      <HorizontalSeparator classnames={['lighter', 'left-to-right']} />
      <InfoSection classnames="TechSummaryPage__InfoSection">
        <div className="TechSummaryPage__Introduction">
          <h2>A Brief History</h2>
          <p>
            Technology has had me enamoured from a very young age. When I had a remote control car,
            I didn't just play with it, I took it apart to see what made the insides work. As you
            would imagine it didn't end well for young David.
          </p>
          <p>
            I was first introduced by my parents via an IBM PS/2 486 Desktop PC. I managed to mess
            up the Windows installation within a week. Pretty darn sure I used{' '}
            <code>FORMAT C:</code>
          </p>
          <p>
            When my parents brought the PC to get fixed, I asked the person fixing the PC if I could
            watch.
          </p>
          <p>
            After watching what he did to re-install Windows, I was now equipped to experiment with
            the OS as much as I pleased as long as I reinstalled it, of course.
          </p>
          <p>
            Little did I know that this interaction would spark a life long journey into technology.
          </p>
        </div>
        {/* <div className="TechSummaryPage__Introduction__StatBars">
          {skills.map(skill => (
            <StatsBar key={JSON.stringify(skill)} {...skill} />
          ))}
          <small>
            * Percentages represent level of confidence when working with respective technologies
          </small>
        </div> */}
        <div className="TechSummaryPage__Introduction__Technology">
          <h2>Technologies</h2>
          <div className="TechLogos">
            {techImages &&
              techImages.map((image: any) => (
                <Image
                  imgClasses={['technology-logo', image.altText.toLowerCase()]}
                  key={image.imgUrl}
                  {...image}
                />
              ))}
          </div>
        </div>
      </InfoSection>
      <HorizontalSeparator classnames={['lighter', 'right-to-left']} />
      <InfoSection id="Projects" classnames="TechSummaryPage__Projects">
        <h2>Projects</h2>
        <div className="TechSummary__Projects__Wrapper">
          {projects.map((project) => (
            <Project key={JSON.stringify(project)} {...project} />
          ))}
        </div>
      </InfoSection>
    </div>
  )
}

export default TechSummary
