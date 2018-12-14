import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class Signup extends Component {

  state = {
    username: "",
    password: "",
    error: null
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password },'hacker')
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user)
      })
      .catch( error => {
        this.setState({
          error: error.response.data.error
        })
      } )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, error } = this.state;
    return (
      <div>
          <h2>Sign up as a hacker</h2>
        <form onSubmit={this.handleFormSubmit}>
          <div>
            <label>Username:</label>
            <input type="text" name="username" value={username} onChange={this.handleChange}/>
          </div>
          <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </div>
          <input type="submit" value="Signup" />
        </form>

        <p>Already have account? 
        <Link to={"/login"}> Login</Link>
        </p>

        <p>{error}</p>

      </div>
    )
  }
}

export default withAuth(Signup);