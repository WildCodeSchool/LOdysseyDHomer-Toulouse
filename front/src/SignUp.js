import React, {Component} from 'react'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {email: "test@test.com"}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({email: e.target.value})
  }

  render() {
    return (
      <div className="left">
        <input id="textInput" type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
        <label htmlFor="textInput">
          <h1>
            <p dangerouslySetInnerHTML={{__html: this.state.email}} />
          </h1>
        </label>
      </div>
    )
  }
}

export default SignUp
