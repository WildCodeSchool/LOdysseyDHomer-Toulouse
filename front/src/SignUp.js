import React from 'react'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Name: '',
      LastName: '',
      Email: '',
      Password: '',
      PasswordCheck: ''
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
    this.setState({Name: e.target.value})
  }
  updateLastName (e) {
    this.setState({LastName: e.target.value})
  }
  updateEmailField (e) {
    this.setState({Email: e.target.value})
  }
  updatePassword (e) {
    this.setState({Password: e.target.value})
  }
  updatePassword2 (e) {
    this.setState({PasswordCheck: e.target.value})
  }
  handleSubmit (e) {
    this.setState({handleSubmit: e.target.value})
    e.preventDefault()
    console.log(this.state)
  }

  render () {
    const myJSON = JSON.stringify(this.state, 1, 1)
    return (<div>
      <h1>{myJSON}</h1>
      <p>Tu peux y arriver !</p>
      <form onSubmit={this.handleSubmit}>
      {/* Mettre tous les fields en une seule commande*/}
      {/* <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.updatelField}/><br /> */}
      <input placeholder="Ton prenom" type="text" name="Name" value={this.state.value} onChange={this.updateName}/>
      <br/>
      <input placeholder="Ton nom" type="text" name="LastName" value={this.state.value} onChange={this.updateLastName}/>
      <br/>
      <input placeholder="Ton email" type="email" name="Email" value={this.state.value} onChange={this.updateEmailField}/>
      <br/>
      <input placeholder="Mot de passe" type="text" name="Password" value={this.state.value} onChange={this.updatePassword}/>
      <br/>
      <input placeholder="Vérification du mot de passe" type="text" name="PasswordCheck" value={this.state.value} onChange={this.updatePassword2}/>
      <br/>
      <input type="submit" value="Soumettre" />
      </form>
    </div>)
  }
}

export default SignUp
