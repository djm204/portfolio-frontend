import React from 'react';
import { HashRouter as Route, Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <header className="App-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tech-summary">Tech Summary</Link>
          <Link to="/cat-stats">Cat Stats</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
