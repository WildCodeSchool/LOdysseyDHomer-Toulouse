import React, { Component } from 'react'
import SignUp from './SignUp'
import logo from './surprise.png'
import './App.css'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MuiThemeProvider>
            <Grid  container alignItems='center'style={{ height:  '100%' }}>
              <Grid  item  xs={12}>
                  <Paper elevation={4} style={{ margin:  32 }}>
                      <Grid  container item xs={12} alignItems='center' justify='center'>
                        <Grid  item  xs={12}  sm={6} style={{ 'text-align':  'center' }}>
                          <img  src="http://images.innoveduc.fr/react_odyssey_homer/wildhomer.png" alt="img homer" />
                        </Grid>
                        <Grid  item  xs={12}  sm={6} style={{ 'text-align': 'left'}} alignContent='center'>
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
