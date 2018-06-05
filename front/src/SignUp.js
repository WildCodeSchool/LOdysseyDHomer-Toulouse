/* global fetch, Headers */
import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      passwordcheck: '',
      flash: '',
      open: false,
      vertical: null,
      horizontal: null
    }

    this.handleClick = state => () => {
      this.setState({ open: true, ...state })
    }

    this.handleClose = () => {
      this.setState({ open: false })
    }
    this.updateEmailField = this.updateEmailField.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updatePassword2 = this.updatePassword2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    // this.updateField = this.updateField.bind(this)
  }

  // updateEmailField == handleChange
  // updateField(event) {
  // //   this.setState({[name]:event.target.value})
  // }
  updateName (e) {
    this.setState({name: e.target.value})
  }
  updateLastName (e) {
    this.setState({lastname: e.target.value})
  }
  updateEmailField (e) {
    this.setState({email: e.target.value})
  }
  updatePassword (e) {
    this.setState({password: e.target.value})
  }
  updatePassword2 (e) {
    this.setState({passwordcheck: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state)

    fetch('/auth/signup',
      {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify(this.state)
      })
      .then(res => res.json())
      .then(
        res => this.setState({'flash': res.flash}),
        err => this.setState({'flash': err.flash})
      )
  }
  render () {
    const { vertical, horizontal, open } = this.state
    // const myJSON = JSON.stringify(this.state, 1, 1)
    return (
      <div>
        {/* Pour afficher le contenu des onChange's */}
        {/* <h1>{myJSON}</h1> */}
        <p>Tu peux y arriver !</p>
        <form onSubmit={this.handleSubmit}>
          { /* Mettre tous les fields en une seule commande */ }
          {/* <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.updatelField}/><br /> */}
          <TextField placeholder="Ton prenom" type="text" name="name" value={this.state.value} onChange={this.updateName}/>
          <br/>
          <TextField placeholder="Ton nom" type="text" name="lastname" value={this.state.value} onChange={this.updateLastName}/>
          <br/>
          <TextField placeholder="Ton email" type="email" name="email" value={this.state.value} onChange={this.updateEmailField}/>
          <br/>
          <TextField placeholder="Mot de passe" type="password" name="password" value={this.state.value} onChange={this.updatePassword}/>
          <br/>
          <TextField placeholder="Mot de passe (Vérification)" type="password" name="passwordcheck" value={this.state.value} onChange={this.updatePassword2}/>
          <br/>
          <Button variant="contained" color="secondary" onClick={this.handleClick({ vertical: 'bottom', horizontal: 'right' })} type="submit" value="Soumettre" style={{ margin: 10 }}>Envoyer</Button>
        </form>
        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.flash}</span>} />
        </div>
      </div>)
  }
}

export default SignUp
