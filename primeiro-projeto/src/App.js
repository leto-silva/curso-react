import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Ola from './Ola'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>OI pessoal..vamos aprender React....</p>
        <Ola name='tulio' />
      </div>
    );
  }
}

export default App;
