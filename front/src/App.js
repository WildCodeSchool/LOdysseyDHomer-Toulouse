import React, { Component } from 'react'
import logo from './logo.svg'
import SignUp from './SignUp.js'
import './App.css'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { color } from '@material-ui/core/colors'
import orange from '@material-ui/core/colors/orange'



class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid container
          alignItems='center'
          style={{ height: '100%',
            backgroundColor: orange[500]}}>
          <Grid item xs={12}>
            <Paper
              elevation={4}
              style={{ margin: 32 }}>
              <Grid container
                alignItems='center'
                justify='center'>
                <Grid item xs={12} sm={6}
                  style={{ 'text-align': 'center' }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid item xs={12} sm={6}
                  alignContent='center' >
                  <h1 >SignUp </h1>
                  <SignUp />

                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>

      </div>
    )
  }
}

export default App
