import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      value: ''
    }
    this.updateEmailField = this.updateEmailField.bind(this)
  }
//updateEmailField == handleChange
  updateEmailField(e) {
    this.setState({value: e.target.value});
    console.log('Email value updated')
  }

  render(){
    return(<div>
      <input placeholder="Votre Email" type="email" name="email" value={this.state.value} onChange={this.updateEmailField}/>
      <h4>Vous avez saisi : {this.state.value}</h4>
      <p></p>
    </div>);
  }
}

export default SignUp
