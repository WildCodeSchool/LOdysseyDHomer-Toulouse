import React from 'react'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      FirstName: '',
      Name: '',
      Email: '',
      Mdp: '',
      MdpCheck: ''
    }

    this.updateEmailField = this.updateEmailField.bind(this)
    this.firstName = this.firstName.bind(this)
    this.name = this.name.bind(this)
    this.mdp = this.mdp.bind(this)
    this.mdp2 = this.mdp2.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  firstName (x) {
    this.setState({FirstName: x.target.value})
  }
  name (x) {
    this.setState({Name: x.target.value})
  }
  updateEmailField (x) {
    this.setState({Email: x.target.value})
  }
  mdp (x) {
    this.setState({Mdp: x.target.value})
  }
  mdp2 (x) {
    this.setState({MdpCheck: x.target.value})
  }
  handleSubmit (x) {
    this.setState({handleSubmit: x.target.value})
    x.preventDefault()
    console.log(this.state)
  }

  render () {
    const myJSON = JSON.stringify(this.state, 1, 1)
    return (<div>
      <h1>{myJSON}</h1>
      <form onSubmit={this.handleSubmit}>
        <input placeholder="Ton prenom" type="text" name="First_Name" value={this.state.value} onChange={this.firstName}/>
        <br/>
        <input placeholder="Ton nom" type="text" name="Name" value={this.state.value} onChange={this.name}/>
        <br/>
        <input placeholder="Ton email" type="email" name="Email" value={this.state.value} onChange={this.updateEmailField}/>
        <br/>
        <input placeholder="Mot de passe" type="text" name="mdp" value={this.state.value} onChange={this.mdp}/>
        <br/>
        <input placeholder="Vérification du mot de passe" type="text" name="mdpCheck" value={this.state.value} onChange={this.mdp2}/>
        <br/>
        <input type="submit" value="Soumettre" />
      </form>
    </div>)
  }
}

export default SignUp