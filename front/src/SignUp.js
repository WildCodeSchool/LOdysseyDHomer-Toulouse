import React, {Component} from 'react';



class SignUp extends Component {

  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordbis: '',
      name: '',
      lastname: ''
    }
    this.updateEmailField = this.updateEmailField.bind(this)
    this.updatePasswordField = this.updatePasswordField.bind(this)
    this.updatePasswordbisField = this.updatePasswordbisField.bind(this)
    this.updateNameField = this.updateNameField.bind(this)
    this.updateLastnameField = this.updateLastnameField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }
  updateEmailField(event) {
    this.setState({email: event.target.value})
  }
  updatePasswordField(event) {
    this.setState({password: event.target.value})
  }
  updatePasswordbisField(event) {
    this.setState({passwordbis: event.target.value})
  }
  updateNameField(event) {
    this.setState({name: event.target.value})
  }
  updateLastnameField(event) {
    this.setState({lastname: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault()
      console.log(this.state)
  }

  render() {
    const Json = JSON.stringify(this.state,null,1)
    return (
      <div>
        <form onSubmit = {this.handleSubmit}>
          <h1 className="formulaire">{Json}</h1>
            <input type="email" className="email" value={this.state.email} onChange={this.updateEmailField} placeholder="Votre email"/><br/>
            <input type="password" className="password" value={this.state.password} onChange={this.updatePasswordField} placeholder="Votre mot de passe"/><br/>
            <input type="passwordbis" className="passwordbis" value={this.state.passwordbis} onChange={this.updatePasswordbisField} placeholder="Vérification de votre mot de passe"/><br/>
            <input type="name" className="name" value={this.state.name} onChange={this.updateNameField} placeholder="Votre Prénom"/><br/>
            <input type="lastname" className="lastname" value={this.state.lastname} onChange={this.updateLastnameField} placeholder="Votre Nom"/><br/>
            <input type="submit" value="Soumettre"/>
          </form>
      </div>
    )
  }
}

export default SignUp;
