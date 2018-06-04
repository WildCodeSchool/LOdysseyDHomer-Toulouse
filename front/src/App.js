import React, { Component } from 'react'
import logo from './donut.png'
import './App.css'
import SignUp from './SignUp.js'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     flash: ''
  //   }
  // }
  render () {
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
    )
  }
}

export default App
