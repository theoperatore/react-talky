import React, { Component } from 'react';
import Button from './components/Button';

import './App.css';
import logo from './logo.svg';

import { fetchProfile } from './state/profile';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleIncrement = this.handleIncrement.bind(this);
  }


  handleIncrement() {
    this.props.updateState(fetchProfile());
  }

  render() {
    const {
      count,
      profile,
    } = this.props.currentState;

    return (
      <section className='p2 mb1'>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          />
        <h1 className='p0 inline-block align-top'>React/Redux Stuffs</h1>
        <Button
          disabled={profile.isLoading}
          className='p3 mt3'
          onClick={this.handleIncrement}
        >Load Profile</Button>
        <p className='h1'>{count} (ms) -- request time</p>
        <h1>You are <strong>{profile.name}</strong></h1>
        <p>{profile.isLoading ? 'Fetching data...' : ''}</p>
        <p className='bg-red'>{profile.error && profile.error}</p>
      </section>
    );
  }
}

export default App;
