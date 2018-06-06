import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

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

    this.handleClick = state => () => {
      this.setState({ open: true, ...state })
    }

    this.handleClose = () => {
      this.setState({ open: false })
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
    const { vertical, horizontal, open } = this.state

    return (
      
      <div>
        <form onSubmit={this.handleSubmit}>

          <TextField type="email" name="email" placeholder="email" onChange={this.handleChange} /> <br/>
          <TextField type="password" name="password" placeholder="password" onChange={this.handleChange} /> <br/>
          <TextField type="passwordBis" name="passwordBis" placeholder="password" onChange={this.handleChange} /> <br/>
          <TextField type="name" name="name" placeholder="name" onChange={this.handleChange} /> <br/>
          <TextField type="lastname" name="lastname" placeholder="lastname" onChange={this.handleChange} /> <br/>

          <Button variant="contained" color="primary" onClick={this.handleClick({ vertical: 'bottom', horizontal: 'right' })}  type="submit" style={{ margin: 10 }}>Envoyer</Button>
          <h1>
            <p dangerouslySetInnerHTML={{__html: JSON.stringify(this.state, 1, 1)}} />
          </h1>
        </form>
        <div>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onclose={this.handleclose}
            ContentProps={{
              'aria-describedby': 'message-id'
            }}
            message={<span id="message-id">{this.state.flash}</span>}/>
        </div>
      </div>
    )
  }
}
export default SignUp
