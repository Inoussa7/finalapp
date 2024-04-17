import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import styles from "./page.module.css";
import { sql } from '@vercel/postgres'; 
import { client } from 'next/client';

const HomePage = ({ users }) => {
  const [showSignUp, setShowSignUp] = React.useState(false); // Use React.useState instead of useState
  const [showSignIn, setShowSignIn] = React.useState(false); // Use React.useState instead of useState

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowSignUp(true);
    setShowSignIn(false); // Hide SignIn form when showing SignUp form
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    setShowSignIn(true);
    setShowSignUp(false); // Hide SignUp form when showing SignIn form
  };

  return (
    <>
      <Header />
      <Navigation />
      {showSignUp && <SignUpForm />}
      {showSignIn && <LoginForm />}

      <br />
      <table>
        <thead>
          <tr>
            {users.length > 0 && Object.keys(users[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value instanceof Date ? value.toISOString() : value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default HomePage;