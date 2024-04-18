// pages/index.js

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import styles from "../app//Navigation.module.css";
import { sql } from '@vercel/postgres'; 

const HomePage = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const returned = await sql`SELECT * FROM language_table`;
      setUsers(returned.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleSignInClick = (event) => {
    event.preventDefault();
    setShowSignIn(true);
    setShowSignUp(false);
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
