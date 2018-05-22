import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">L'Odyssée d'Homer</h1>
        </header>
        <p className="App-intro">
          On est pas sortis du sable, mais au moins, on essaie !
        </p>
        <SignUp />
      </div>
    );
  }
}

export default App;
