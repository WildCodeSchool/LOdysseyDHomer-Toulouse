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
        <MuiThemeProvider>
          <Grid container
            alignItems='center'
            style={{ height: '100%' }}>
            <Grid item xs={12}>
              <Paper
                elevation={4}
                style={{ margin: 32 }}>
                <Grid container
                  alignItems='center'
                  justify='center'>
                  <Grid time xs={12}
                    alignContent='center'>
                    <SignUp />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
