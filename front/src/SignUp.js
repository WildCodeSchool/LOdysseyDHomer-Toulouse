  import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';

  class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {email: 'test@test.com'};
      this.updateEmailField= this.updateEmailField.bind(this);
    }
    updateEmailField(event) {
      this.setState({email: event.target.value});
    }
    render() {
      return (
        <div>
          <h1>{this.state.email}</h1>
          <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField} />
        </div>
      );
    }
}

  export default SignUp
