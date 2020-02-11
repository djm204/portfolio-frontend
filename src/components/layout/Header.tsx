import React from 'react';
import { HashRouter as Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../stylesheets/Egg.css';

const Header = () => {
  return (
    <React.Fragment>
      <header className="App__Header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/tech-summary">Tech Summary</Link>
          <Link to="/contact">Contact</Link>
          <div className="EggBert">
            <FontAwesomeIcon icon={'egg'} />
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
