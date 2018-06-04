import React from 'react'

class SignUp extends React.Component {
  constructor(props) {
    super(props)
      this.updateEmailField = this.updateEmailField.bind(this)
      this.updatePasswordField = this.updatePasswordField.bind(this)
      this.updateCheckPassword = this.updateCheckPassword.bind(this)
      this.updateNameField = this.updateNameField.bind(this)
      this.updateLastnameField = this.updateLastnameField.bind(this)
      // this.updateField = this.updateField.bind(this)
      this.handlesubmit = this.handlesubmit.bind(this)
      this.state = {email: "", password:"", checkPassword: "", name: "", lastname: "", flash: ""}
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
  // réduction du code avec la fonction updateField
  // updateField(event) {
  //   const name = event.target.name
  //   this.setState({
  //     [name]: event.target.value
  //   })
  // }

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
    const etatFormulaire = JSON.stringify(this.state,1,1)
        
    return (
      <div>
        <form onSubmit={this.handlesubmit}>
        <h1>{etatFormulaire}</h1>
        <p>Veuillez renseigner les champs ci dessous</p>
         <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField} placeholder="Votre email" /><br />
         <input type="password" name="password" value={this.state.value} onChange={this.updatePasswordField} placeholder="Mot de passe" /><br />
         <input type="password" name="checkPassword" value={this.state.value} onChange={this.updateCheckPassword} placeholder="répétez mot de passe" /><br />
         <input type="text" name="name" value={this.state.value} onChange={this.updateNameField} placeholder="Prénom" /><br />
         <input type="text" name="lastname" value={this.state.value} onChange={this.updateLastnameField} placeholder="Nom" /><br />
         <input type="submit" value="Soumettre" />
         </form>
      </div>)
  }
}

export default SignUp;
