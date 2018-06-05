import React from 'react'

class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordBis: '',
      name: '',
      lastname: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
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
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>

        <input type="email" name="email" placeholder="email" onChange={this.handleChange} /> <br/>
        <input type="password" name="password" placeholder="password" onChange={this.handleChange} /> <br/>
        <input type="passwordBis" name="passwordBis" placeholder="password" onChange={this.handleChange} /> <br/>
        <input type="name" name="name" placeholder="name" onChange={this.handleChange} /> <br/>
        <input type="lastname" name="lastname" placeholder="lastname" onChange={this.handleChange} /> <br/>

        <input type="submit" value="Soumettre" />
        <h1>
          <p dangerouslySetInnerHTML={{__html: JSON.stringify(this.state, 1, 1)}} />
        </h1>

      </form>
    )
  }
}
export default SignUp
