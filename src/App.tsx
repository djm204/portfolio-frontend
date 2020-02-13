import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About/About';
import TechSummary from './pages/TechSummary/TechSummary';
import Contact from './pages/Contact/Contact';
import Navigation from './components/Navigation';
import HorizontalSeparator from './components/layout/HorizontalSeparator';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltDown, faEnvelopeSquare, faChevronRight, faEgg } from '@fortawesome/pro-solid-svg-icons'

AOS.init();

library.add( faArrowAltDown, faEgg, faChevronRight, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faGithubSquare, faEnvelopeSquare );

const App = () => {
  return (
      <div id="App__Container">
      <Header />
      <Navigation />
          <About /> 
          <HorizontalSeparator classnames={['lighter', 'left-to-right']} />
          <TechSummary />
          <HorizontalSeparator classnames={['darker', 'left-to-right']} />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
