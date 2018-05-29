import React, {Component} from 'react'

class SignUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: "mon@email.com",
      password: "MonPassw0rd",
      passwordBis: "MonPassw0rd",
      name: "James",
      lastname: "Bond"
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({[e.target.attributes.id.value]: e.target.value})
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log("A new account has been created:", this.state)
  }

  render () {
    return (
      <form className="left" onSubmit={this.handleSubmit}>
        <input id="email" type="email" placeholder="email" onChange={this.handleChange} /><br/>
        <input id="password" type="password" placeholder="password" onChange={this.handleChange} /><br/>
        <input id="passwordBis" type="password" placeholder="check password" onChange={this.handleChange} /><br/>
        <input id="name" placeholder="name" onChange={this.handleChange}/><br/>
        <input id="lastname" placeholder="lastname" onChange={this.handleChange}/><br/>
        <input type="submit" value="Soumettre" />
        <label htmlFor="textInput">
          <h1>
            <p dangerouslySetInnerHTML={{__html: JSON.stringify(this.state, 1, 1)}} />
          </h1>
        </label>
      </form>
    )
  }
}

export default SignUp
