import React from 'react';

/**
 * dependence module
 */
import About from '../components/about.js';
import Contact from '../components/contact.js';
import Home from '../components/home.js';

/**
 * export module
 */
export default class Router extends React.Component {
  render() {
    return (
      <div>
        <h1>es2015 + babel6 + webpack + react !</h1>
        <h2>auto rebuild and reload browser</h2>
        <ul>
          <li><Home /></li>
          <li><Contact /></li>
          <li><About /></li>
        </ul>
      </div>
    )
  }
}
