import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import TechSummary from './pages/TechSummary/TechSummary';
import CatStats from './pages/CatStats/CatStats';
import Contact from './pages/Contact/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faChevronRight, faEgg } from '@fortawesome/pro-solid-svg-icons'

library.add( faEgg, faChevronRight, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin, faGithubSquare, faEnvelopeSquare );

const App = () => {
  return (
    <Router>
      <Header />
      <div id="App__Container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tech-summary" component={TechSummary} />
          <Route exact path="/cat-stats" component={CatStats} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
