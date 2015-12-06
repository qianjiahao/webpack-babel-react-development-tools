import React from 'react';

export default class ReactTab extends React.Component {
  render() {
    return (
      <div>
        <div className="clearFix">
          <div className="react-items">
            <h2>JUST THE UI</h2>
            <p>
              Lots of people use React as the V in MVC. 
              Since React makes no assumptions about the rest of your technology stack, 
              it's easy to try it out on a small feature in an existing project.
            </p>
          </div>
          <div className="react-items">
            <h2>VIRTUAL DOM</h2>
            <p>
              React abstracts away the DOM from you, 
              giving a simpler programming model and better performance. 
              React can also render on the server using Node, 
              and it can power native apps using React Native.
            </p>
          </div>
          <div className="react-items">
            <h2>DATA FLOW</h2>
            <p>
              React implements one-way reactive data flow which reduces boilerplate 
              and is easier to reason about than traditional data binding.
            </p>
          </div>
        </div>
        <div className="learn-more"><a href="https://github.com/facebook/react" target="blank">Learn more ...</a></div>

      </div>
      
    )
  }
}