import React from 'react';
import { Router , Route , Link , IndexRoute } from 'react-router';
/**
 * dependence module
 */
import Base from '../components/base.js';
import BabelTab from '../components/babel-tab.js';
import ReactTab from '../components/react-tab.js';
import WebpackTab from '../components/webpack-tab.js';

let routes = (
  <Router>
    <Route path="/" component={Base}>
      <IndexRoute component={BabelTab} />
      <Route path="babel" component={BabelTab} />
      <Route path="react" component={ReactTab} />
      <Route path="webpack" component={WebpackTab} />
    </Route>
  </Router>
);

export default routes;
