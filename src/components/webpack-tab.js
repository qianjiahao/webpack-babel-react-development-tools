import React from 'react';

export default class WebpackTab extends React.Component {
  render() {
    return (
      <div>
        <div className="clearFix">
          <div className="react-items">
            <h2>Plugins</h2>
            <p>
              webpack has a rich plugin interface. 
              Most of the features are internal plugins using this interface. 
              This makes webpack very flexible.
            </p>
          </div>
          <div className="react-items">
            <h2>Loaders</h2>
            <p>
              webpack supports pre-processing files via loaders. 
              This allows you to bundle any static resource not only javascript. 
              You can easily write your own loaders running in node.js.
            </p>
          </div>
          <div className="react-items">
            <h2>Performance</h2>
            <p>
              webpack uses async I/O and has multiple caching levels. 
              This makes webpack fast and incredibly fast on incremental compilation.
            </p>
          </div>
        </div>
        <div className="learn-more"><a href="https://github.com/webpack/webpack" target="blank">Learn more ...</a></div>
      </div>
      
    )
  }
}