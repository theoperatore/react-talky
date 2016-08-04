import React from 'react';

import logo from '../logo.svg';

export default function Landing(props) {
  return (
    <div className="App" {...props}>
      <div className="App-header p2">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          />
      </div>
      <h1 className="p0 huge">OMG REACT</h1>
      <p>A quick refresher of the React framework</p>
    </div>
  );
}
