import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TechSummary from './pages/TechSummary';
import CatStats from './pages/CatStats';
import Contact from './pages/Contact';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div id="app-container">
        <Header />
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
