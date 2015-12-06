import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="clearFix">
        <div className="babel">Babel</div>
        <div className="webpack">Webpack</div>
        <div className="react">React</div>
      </div>
    )
  }
}