// LoginForm.js
'use client'
import React from 'react';
import styles from '../app/page.module.css';

class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { username, password } = this.state;
  
    try {
      const response = await fetch('https://april20finalapp.vercel.app/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful', data);
        localStorage.setItem('userData', JSON.stringify(data));  // Assuming 'data' contains user token or user info
        // Handle successful login (e.g., redirect to another page)
      } else {
        console.log('Login failed', data.message);
        // Handle failed login (e.g., show error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle error (e.g., show error message)
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
            className={styles.input}
            autoComplete="current-password"
          />
        </label>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    );
  }
}

export default LoginForm;