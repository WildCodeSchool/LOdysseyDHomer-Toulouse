// eslint-disable-next-line 
 import React, { Component } from 'react';
  import logo from './logo.svg';
  import './App.css';


  class SignUp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        email: "mon@email.com",
        password: "monPassw0rd",
        passwordBis : "samePassw0rd",
        firstname: "John",
        lastname: "Doe"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        const name = event.target.name
        this.setState({
        [name] : event.target.value
      })
      }


      handleSubmit(event) {
        console.log(this.state)
        event.preventDefault()
      }
    
      render() {
        const myJSON = JSON.stringify(this.state,1,1)
        return (
          <div>
          <h1>{myJSON}</h1>
          <form onSubmit={this.handleSubmit}>
          <label>Email:
              <input type="email" name="email" onChange={this.handleChange} /> < br/>
          </label>
          <label>password:
              <input type="password" name="password" onChange={this.handleChange} /> < br/>
          </label>
          <label>passwordBis:
              <input type="password" name="password" onChange={this.handleChange} /> < br/>
          </label>
          <label>firstname:
              <input type="firstname" name="firstname" onChange={this.handleChange} /> < br/>
          </label>
          <label>lastname:
              <input type="lastname" name="lastname" onChange={this.handleChange} /> < br />
          </label>
            <input type="submit" value="Submit" />
          </form>
          </div>
        )
      }
    }
    
  export default SignUp
