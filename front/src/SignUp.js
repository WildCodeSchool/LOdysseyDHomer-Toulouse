import React, {Component} from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email : "",
      password : "",
      passwordbis : "",
      name : "",
      lastname : ""
      }
    this.updateEmailField= this.updateEmailField.bind(this)
    this.updatePasswordField= this.updatePasswordField.bind(this)
    this.updatePasswordbisField= this.updatePasswordbisField.bind(this)
    this.updateNameField= this.updateNameField.bind(this)
    this.updateLastnameField= this.updateLastnameField.bind(this)
    this.handleSubmit= this.handleSubmit.bind(this)
    }
  updateEmailField(event) {
    this.setState({email: event.target.value})
  }
  updatePasswordField(event){
    this.setState({password: event.target.value})
  }
  updatePasswordbisField(event){
    this.setState({passwordbis: event.target.value})
  }
  updateNameField(event){
    this.setState({name: event.target.value})
  }
  updateLastnameField(event){
    this.setState({lastname: event.target.value})
  }
 
  handleSubmit(event){
    event.preventDefault()
    console.dir(this.state)
  }




  render() {
    const nyjson = JSON.stringify(this.state,1,1)

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField} />
        <input type="password" name="monpassword" value={this.state.value} onChange={this.updatePasswordField} />
        <input type=",passwordbis" name=",passwordbis" value={this.state.value} onChange={this.updatePasswordbisField} />
        <input type="name" name="name" value={this.state.value} onChange={this.updateNameField} />
        <input type="name" name="lastname" value={this.state.value} onChange={this.updateLastnameField} />
        <input type="submit" value="Soumettre"/>
        <h1>{nyjson}</h1>
        </form>
      </div>
    );
  }
}
 
export default SignUp;