import React from 'react'

class SignUp extends React.Component {

  constructor(props){
    super(props)
    this.updateEmailField = this.updateEmailField.bind(this)
    this.state = { email: ''}
  }
  updateEmailField(event) {
  this.setState({ email: event.target.value})
  }
  render() {

    return (
      <div>
        <h1>{this.state.email}</h1>
        <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField}/>
      </div>
    )
  }
}

export default SignUp
