import React, { Component } from 'react'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordBis: '',
      name: '',
      lastname: '',
      flash: ''}
    this.UpdateFields = this.UpdateFields.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  UpdateFields (event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({[name]: value})
  }

  handleSubmit (e) {
    e.preventDefault()
    fetch('/auth/signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(
        res => this.setState({'flash': res.flash}),
        err => this.setState({'flash': err.flash})
      )
  }

  render () {
    const affichage = JSON.stringify(this.state, 1, 1)
    return (
      <div>

        <h1>{affichage}</h1><br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">E-mail : </label>
          <input type="email" name="email" value ={this.state.email} onChange={this.UpdateFields}/><br/>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" value ={this.state.password} onChange={this.UpdateFields}/><br/>
          <label htmlFor="passwordBis">PasswordBis : </label>
          <input type="passwordBis" name="passwordBis" value ={this.state.passwordBis} onChange={this.UpdateFields}/><br/>
          <label htmlFor="name">Name : </label>
          <input type="name" name="name" value ={this.state.name} onChange={this.UpdateFields}/><br/>
          <label htmlFor="lastname">Lastname : </label>
          <input type="lastname" name="lastname" value ={this.state.lastname} onChange={this.UpdateFields}/><br/>
          <input type="submit" value="Soumettre"/>
        </form>
      </div>
    )
  }
}
export default SignUp
