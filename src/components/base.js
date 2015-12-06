import React from 'react';
import { Link } from 'react-router';

import Header from './header.js';
import Footer from './footer.js';

export default class Base extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        
        <hr className="line"/>

        <section>
          <ul>
            <li><Link to="/babel" className="linkItem">babel</Link></li>
            <li><Link to="/webpack" className="linkItem">webpack</Link></li>
            <li><Link to="/react" className="linkItem">react</Link></li>
          </ul>
        </section>
        
        <section>
          <div className="clearFix container">
            {this.props.children}
          </div>
        </section>
        
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}