import React, { Component } from 'react'
import logo from './donut.png'
import './App.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
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
          On est pas sortis du sable, mais le SnackBar ne va pas te résister !
        </p>
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
                <Grid item xs={12} sm={6}
                  style={{ 'text-align': 'center' }}>
                  <img src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" />
                </Grid>
                <Grid time xs={12} sm={6}
                  alignContent='center'>
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
