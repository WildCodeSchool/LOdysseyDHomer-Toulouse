import React from 'react'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
      this.updateEmailField = this.updateEmailField.bind(this)
      this.updatePasswordField = this.updatePasswordField.bind(this)
      this.updateCheckPassword = this.updateCheckPassword.bind(this)
      this.updateNameField = this.updateNameField.bind(this)
      this.updateLastnameField = this.updateLastnameField.bind(this)
      this.handlesubmit = this.handlesubmit.bind(this)
      this.state = {email: "", password:"", checkPassword: "", name: "", lastname: ""}
  }

  updateEmailField(event) {
    this.setState({email: event.target.value})
  }
  updatePasswordField(event) {
    this.setState({password: event.target.value})
  }
  updateCheckPassword(event) {
    this.setState({checkPassword : event.target.value})
  }
  updateNameField(event) {
    this.setState({name: event.target.value})
  }
  updateLastnameField(event) {
    this.setState({lastname: event.target.value})
  }
  handlesubmit(event) {
    console.log(this.state)
  } 
  
  render() {
    const etatFormulaire = JSON.stringify(this.state,1,1)
        
    return (
      <div>
        <h1>{etatFormulaire}</h1>
        <p>Veuillez renseigner les champs ci dessous</p>
         <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField} /><br />
         <input type="password" name="password" value={this.state.value} onChange={this.updatePasswordField} /><br />
         <input type="password" name="checkPassword" value={this.state.value} onChange={this.updateCheckPassword} /><br />
         <input type="text" name="name" value={this.state.value} onChange={this.updateNameField} /><br />
         <input type="text" name="lastname" value={this.state.value} onChange={this.updateLastnameField} /><br />
         <input type="submit" value="Soumettre" onClick={this.handlesubmit} />
      </div>)
  }
}

export default SignUp;
