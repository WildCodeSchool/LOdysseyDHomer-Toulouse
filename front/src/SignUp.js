import React from 'react'
import { TextField, Button, Snackbar } from '@material-ui/core'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
      // this.updateEmailField = this.updateEmailField.bind(this)
      // this.updatePasswordField = this.updatePasswordField.bind(this)
      // this.updateCheckPassword = this.updateCheckPassword.bind(this)
      // this.updateNameField = this.updateNameField.bind(this)
      // this.updateLastnameField = this.updateLastnameField.bind(this)
      this.handleClick = state => () => {
        this.setState({ open : true, ...state})
      }
      
      this.handleClose = () => {
        this.setState({ open: false })
      }
      this.updateField = this.updateField.bind(this)
      this.handlesubmit = this.handlesubmit.bind(this)
      this.state = {email: "", password:"", checkPassword: "", name: "", lastname: "", flash: "", open: false, vertical: null, horizontal: null}
     
  }

  // updateEmailField(event) {
  //   this.setState({email: event.target.value})
  // }
  // updatePasswordField(event) {
  //   this.setState({password: event.target.value})
  // }
  // updateCheckPassword(event) {
  //   this.setState({checkPassword : event.target.value})
  // }
  // updateNameField(event) {
  //   this.setState({name: event.target.value})
  // }
  // updateLastnameField(event) {
  //   this.setState({lastname: event.target.value})
  // }
  // réduction du code avec la fonction updateField
  updateField(event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handlesubmit(event) {
    event.preventDefault()
    console.log(this.state)
    fetch("/auth/signup", {
      method:  'POST',
      headers:  new  Headers({
          'Content-Type':  'application/json'
      }),
      body:  JSON.stringify(this.state),
    })
      .then(res  =>  res.json())
      .then(
          res  =>  this.setState({"flash":  res.flash}),
          err  =>  this.setState({"flash":  err.flash})
      )
  } 

  render() {
    // const etatFormulaire = JSON.stringify(this.state,1,1)
    
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
        {/* <h1>{etatFormulaire}</h1> */}
        <p>D'hooo!!! rempli çà...</p>
         <TextField type="email" name="email" value={this.state.value} onChange={this.updateField} placeholder="Votre email" /><br />
         <TextField type="password" name="password" value={this.state.value} onChange={this.updateField} placeholder="Mot de passe" /><br />
         <TextField type="password" name="checkPassword" value={this.state.value} onChange={this.updateField} placeholder="répétez mot de passe" /><br />
         <TextField type="text" name="name" value={this.state.value} onChange={this.updateField} placeholder="Prénom" /><br />
         <TextField type="text" name="lastname" value={this.state.value} onChange={this.updateField} placeholder="Nom" /><br />
         <Button type="submit" color="primary" onClick={this.handleClick({ vertical: 'bottom', horizontal: 'left'})}>Soumettre</Button>
         </form>
         <div>
         <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.open}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id="message-id">{this.state.flash}</span>}
          />
          </div>
      </div>)
  }
}

export default SignUp
