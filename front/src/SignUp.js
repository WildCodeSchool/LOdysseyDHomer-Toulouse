import React, {Component} from 'react';
class SignUp extends Component {
 
  constructor(props) {
    super(props);
    this.state = { email : ""  };
    this.updateEmailField= this.updateEmailField.bind(this)
  }
 
  updateEmailField(event) {
    this.setState({email: event.target.value});
  }

 
  render() {
    return(
      <div>
        <h1>{JSON.stringify(this.state,1,1)}</h1>
        <input type="email" name="email" value={this.state.value} onChange={this.updateEmailField} />
        <input type="password" name="monpassword" value={this.state.value} onChange={this.updatePasswordField} />
        <input type=",passwordbis" name=",passwordbis" value={this.state.value} onChange={this.updateEmailField} />
        <input type="name" name="name" value={this.state.value} onChange={this.updateEmailField} />
        <input type="lastname" name="lastname" value={this.state.value} onChange={this.updateEmailField} />
        <input type="submit" value="Soumettre"/>
      </div>
    );
  }
}
 
export default SignUp;