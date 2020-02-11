import React from 'react';
import { HashRouter as Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../stylesheets/Egg.css';
import '../../stylesheets/Stars.css';

import Stars from '../Stars';

const Header = () => {
  return (
      <header className="App__Header">
        <Stars />
      </header>
  );
}

export default Header;
