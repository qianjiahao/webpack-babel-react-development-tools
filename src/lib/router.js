import React from 'react';

import About from '../components/about.js';
import Contact from '../components/contact.js';
import Home from '../components/home.js';


export default class Router extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>es2015 + babel6 + webpack + react !</h1>

        <ul>
          <li><Home /></li>
          <li><Contact /></li>
          <li><About /></li>
        </ul>
      </div>
    )
  }
}
