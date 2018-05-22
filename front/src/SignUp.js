import React from 'react'

class SignUp extends React.Component {

  constructor(props){
    super(props)
    this.updateEmailField = this.updateEmailField.bind(this)
    this.updatePasswordField = this.updatePasswordField.bind(this)
    this.updatePasswordBisField = this.updatePasswordBisField.bind(this)
    this.updateNameField = this.updateNameField.bind(this)
    this.updateLastNameField = this.updateLastNameField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { email: '', password: '', passwordBis: '', name: '', lastName: ''}
  }

  updateEmailField(event) {
  this.setState({ email: event.target.value})
  }

  updatePasswordField(event) {
  this.setState({ password: event.target.value})
  }

  updatePasswordBisField(event) {
  this.setState({ passwordBis: event.target.value})
  }

  updateNameField(event) {
  this.setState({ name: event.target.value})
  }

  updateLastNameField(event) {
  this.setState({ lastName: event.target.value})
  }


  handleSubmit(event) {
    event.preventDefault()
      console.log(this.state)

  }


  render() {
    const affichage = JSON.stringify(this.state,1,1)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{affichage}</h1>
          <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
          <input type="password" name="password" value={this.state.password} onChange={this.updatePasswordField}/>
          <input type="password" name="passwordBis" value={this.state.passwordBis} onChange={this.updatePasswordBisField}/>
          <input type="name" name="name" value={this.state.name} onChange={this.updateNameField}/>
          <input type="name" name="lastName" value={this.state.lastName} onChange={this.updateLastNameField}/>
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    )
  }
}

export default SignUp
