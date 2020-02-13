import React from 'react'
import { InfoSection } from '../../components/layout/InfoSection'
import Project from './Project'
import StatsBar from './StatsBar'
import '../../stylesheets/TechSummary.css'
import { skills, projects } from './dataSource'
import HorizontalSeparator from '../../components/layout/HorizontalSeparator'

const TechSummary = () => {
  return (
    <div id="TechSummary" className="TechSummaryPage">
      <InfoSection
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        classnames="TechSummaryPage__InfoSection"
      >
        <div className="TechSummaryPage__Introduction">
          <h2>A Brief History</h2>
          <p>
            David has been intrigued with Technology from a very small age. He was first introduced
            by his parents via a IBM PS/2 486 Desktop PC.
          </p>
          <p>
            He managed to brick the Windows installation within a week, pretty sure it was{' '}
            <code>FORMAT C:</code>
          </p>
          <p>
            When David's parents brought the PC to get fixed, he asked the person fixing the PC if
            he could watch.
          </p>
          <p>
            After watching what he did to re-install Windows, David was now equipped to corrupt the
            OS as much as he pleased as long as he reinstalled it.
          </p>
          <p>
            Little did David know that this interaction would spark a life long journey into
            technology.
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
      <HorizontalSeparator
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
        classnames={['lighter', 'right-to-left']}
      />
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
