import React, { Component } from 'react'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "mon@email.com", 
      password: "monPassw0rd",
      passwordBis: "monPassw0rdB1s",
      name: "James",
      lastname: "Bond"}
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
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <h1>{this.state.name} {this.state.lastname}</h1>
        <h2>  {this.state.email}</h2>
        <h3> {this.state.password} {this.state.passwordBis} </h3><br/>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">E-mail : </label>
          <input type="email" name="email" value ={this.state.email} onChange={this.UpdateFields}/><br/>
          <label htmlFor="password">Password : </label>
          <input type="password" name="password" value ={this.state.password} onChange={this.UpdateFields}/><br/>
          <label htmlFor="passwordBis">Password : </label>
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
