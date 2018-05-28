import React, { Component } from 'react'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {email: 'email@domain.com'}
    this.UpdateEmailField = this.UpdateEmailField.bind(this)
  }

  UpdateEmailField (event) {
    this.setState({email: event.target.value})
  }

  render () {
    return (
      <div>
        <h1>{this.state.email}</h1><br/>
        <label for="email">E-mail :</label>
        <input type="email" name="email" value ={this.state.value} onChange={this.UpdateEmailField}/>
      </div>)
  }
}
export default SignUp
