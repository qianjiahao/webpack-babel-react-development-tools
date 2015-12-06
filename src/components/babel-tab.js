import React from 'react';

export default class BabelTab extends React.Component {
  render() {
    return (
      <div>
        <div className="clearFix">
          <div className="react-items">
            <h2>ES2015 and beyond</h2>
            <p>
              Babel has support for the latest version of JavaScript through syntax transformers. 
              These allow you to use new syntax, right now without waiting for browser support. 
              Check out our ES2015 preset to get started. Learn about ES2015 →
            </p>
          </div>
          <div className="react-items">
            <h2>JSX and React</h2>
            <p>
              Babel has support for JSX and Flow. Check out our React preset to get started. 
              Use it together with the babel-sublime package to bring syntax highlighting to a whole new level.
            </p>
          </div>
          <div className="react-items">
            <h2>Pluggable</h2>
            <p>
              Babel is built out of plugins. 
              Compose your own transformation pipeline using existing plugins or write your own. 
              Easily use a set of plugins by using or creating a preset.
            </p>
          </div>
        </div>
        <div className="learn-more"><a href="https://github.com/babel/babel" target="blank">Learn more ...</a></div>
      </div>
      
    )
  }
}