import React from 'react'
import { InfoSection } from '../../components/layout/InfoSection'
import Project from './Project'
import StatsBar from './StatsBar'
import '../../stylesheets/TechSummary.css'
import { skills, projects } from './dataSource'
import HorizontalSeparator from '../../components/layout/HorizontalSeparator'

const TechSummary = () => {
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
            I didn't just play with it, I took it a part to see what made the insides work. As you
            would imagine it didn't end well for young David.
          </p>
          <p>
            I was first introduced by my parents via a IBM PS/2 486 Desktop PC.I managed to mess up
            the Windows installation within a week. Pretty darn sure I used <code>FORMAT C:</code>
          </p>
          <p>
            When my parents brought the PC to get fixed, I asked the person fixing the PC if I could
            watch, he agreed.
          </p>
          <p>
            After watching what he did to re-install Windows, I was now equipped to corrupt the OS
            as much as I pleased as long as I reinstalled it, of course.
          </p>
          <p>
            Little did I know that this interaction would spark a life long journey into technology.
          </p>
        </div>
        <div className="TechSummaryPage__Introduction__StatBars">
          {skills.map(skill => (
            <StatsBar key={JSON.stringify(skill)} {...skill} />
          ))}
          <small>
            * Percentages represent level of confidence when working with respective technologies
          </small>
        </div>
      </InfoSection>
      <HorizontalSeparator classnames={['lighter', 'right-to-left']} />
      <InfoSection id="Projects" classnames="TechSummaryPage__Projects">
        <h2>Projects</h2>
        <div className="TechSummary__Projects__Wrapper">
          {projects.map(project => (
            <Project key={JSON.stringify(project)} {...project} />
          ))}
        </div>
      </InfoSection>
    </div>
  )
}

export default TechSummary
