import React from 'react'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    // this.updateField = this.updateField.bind(this)    Pour rappeler tout les champs du formulaire une seul fois
    this.updateEmailField = this.updateEmailField.bind(this)
    this.updatePasswordField = this.updatePasswordField.bind(this)
    this.updatePasswordBisField = this.updatePasswordBisField.bind(this)
    this.updateNameField = this.updateNameField.bind(this)
    this.updatelastnameField = this.updatelastnameField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = { email: '', password: '', passwordBis: '', name: '', lastname: '', flash: '' }
  }
  // Pour rappeler tout les champs du formulaire une seul fois
  // updateField(event) {
  //   this.setState({[name]:event.target.value})
  // }

  updateEmailField (event) {
    this.setState({ email: event.target.value })
  }

  updatePasswordField (event) {
    this.setState({ password: event.target.value })
  }

  updatePasswordBisField (event) {
    this.setState({ passwordBis: event.target.value })
  }

  updateNameField (event) {
    this.setState({ name: event.target.value })
  }

  updatelastnameField (event) {
    this.setState({ lastname: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
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
    // console.log(this.state)

  }

  render () {
    const affichage = JSON.stringify(this.state, 1, 1)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>{affichage}</h1>
          {/* exemple pour rappeler tout les champs du formulaire une seul fois */}
          {/* <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.updatelField}/><br />  */}
          {/* <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.updateField}/><br />
          <input type="password" placeholder="confirm password" name="passwordBis" value={this.state.passwordBis} onChange={this.updateField}/><br />
          <input type="name" placeholder="name" name="name" value={this.state.name} onChange={this.updateField}/><br />
          <input type="name" placeholder="lastname" name="lastname" value={this.state.lastname} onChange={this.updateField}/><br /><br /> */}

          <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.updateEmailField}/><br />
          <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.updatePasswordField}/><br />
          <input type="password" placeholder="confirm password" name="passwordBis" value={this.state.passwordBis} onChange={this.updatePasswordBisField}/><br />
          <input type="name" placeholder="name" name="name" value={this.state.name} onChange={this.updateNameField}/><br />
          <input type="name" placeholder="lastname" name="lastname" value={this.state.lastname} onChange={this.updatelastnameField}/><br /><br />
          <input type="submit" value="Soumettre" />
        </form>
      </div>
    )
  }
}

export default SignUp
