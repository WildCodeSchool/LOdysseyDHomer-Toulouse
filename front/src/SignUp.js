import React from 'react';

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.updateField = this.updateField.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      email: "",
      password: "",
      name:"",
      lastname:""
    }
  }
  updateField(event){
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }
  handleSubmit(event){
    event.preventDefault()
    console.dir(this.state)
  }
  
  render() {
    return( <div>
  <h1>{JSON.stringify(this.state,1,1)}</h1>
    <form onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input type="email" name="email" onChange={this.updateField} placeholder="E-mail"/>
      </div>
      <div className="form-group">
        <input type="password" name="password" onChange={this.updateField} placeholder="Mot de passe"/>
      </div>
      <div className="form-group">
        <input type="password" name="password-confirmation"  placeholder="Confirmation du mot de passe"/>
      </div>
      <div className="form-group">
        <input type="name" name="name" onChange={this.updateField} placeholder="Prénom"/>
      </div>
      <div className="form-group">
        <input type="lastname" name="lastname" onChange={this.updateField} placeholder="Nom"/>
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
    </div>);
  }
}

export default SignUp;