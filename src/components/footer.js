import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <span>JavaScript 2015 Development Tools</span>
        <span className="text-right"><a className="github-link" target="blank" href="https://github.com/qianjiahao/es2015-babel6-webpack">view on Github</a></span>
      </div>
    )
  }
}