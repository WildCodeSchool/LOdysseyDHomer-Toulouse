import React, { Component } from 'react';
import SignUp from './SignUp.js';
import logo from './coeur.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">You Are the Best!</h1>
        </header>
       
        <SignUp />
    
      </div>
    );
  }
}

export default App ;