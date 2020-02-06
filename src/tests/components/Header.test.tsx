import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../components/layout/Header';
import { HashRouter as Router} from 'react-router-dom'

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Router><Header /></Router>, div);
});
