import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './pages/About/About'
import TechSummary from './pages/TechSummary/TechSummary'
import Contact from './pages/Contact/Contact'
import Navigation from './components/Navigation'
import HorizontalSeparator from './components/layout/HorizontalSeparator'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons'
import {
  faArrowAltDown,
  faEnvelopeSquare,
  faChevronRight,
  faEgg,
  faEggFried,
  faBars,
  faTimesCircle,
  faSpinner,
  faCheckCircle,
} from '@fortawesome/pro-solid-svg-icons'

AOS.init()

library.add(
  faBars,
  faTimesCircle,
  faArrowAltDown,
  faEgg,
  faEggFried,
  faChevronRight,
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
  faEnvelopeSquare,
  faGitlab,
  faSpinner,
  faCheckCircle
)

const App = () => {
  return (
    <div id="App__Container">
      <Header />
      <Navigation />
      <About />
      <TechSummary />
      <HorizontalSeparator classnames={['darker', 'left-to-right']} />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
