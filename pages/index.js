import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';
import styles from "../app/Navigation.module.css";
import { sql } from '@vercel/postgres'; 
import dbConnect from '../utils/dbConnect';
import ErrorBoundary from '../components/ErrorBoundary';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [mongoData, setMongoData] = useState([]);

  // Function for fetching data from PostgreSQL
  const fetchPostgresData = async () => {
    try {
      const returned = await sql`SELECT * FROM language_table`;
      setUsers(returned.rows);
      // Debug code
      console.log('PostgreSQL data:', returned.rows);
      returned.rows.forEach(row => {
        for (let key in row) {
          if (typeof row[key] === 'string' && row[key].startsWith('Hello')) {
            console.log(`Found a string that starts with 'Hello' in PostgreSQL data: ${row[key]}`);
          }
        }
        for (let key in row) {
          if (row[key] && typeof row[key] === 'string' && row[key].startsWith('Hello')) {
            console.log(`Found a string that starts with 'Hello' in PostgreSQL data: ${row[key]}`);
          }
        }
      });
    } catch (error) {
      console.error('Error fetching PostgreSQL data:', error);
    }
  };
// Function for fetching data from MongoDB
const fetchMongoData = async () => {
  try {
    const res = await fetch('/api/mongoData');
    const mongoData = await res.json();
    setMongoData(mongoData);
    // Debug code
    console.log('MongoDB data:', mongoData);
    mongoData.forEach(doc => {
      for (let key in doc) {
        if (doc[key] && typeof doc[key] === 'string' && doc[key].startsWith('Hello')) {
          console.log(`Found a string that starts with 'Hello' in MongoDB data: ${doc[key]}`);
        }
      }
    });
  } catch (error) {
    console.error('Error fetching MongoDB data:', error);
  }
};

  useEffect(() => {
    fetchPostgresData();
    fetchMongoData();
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
      <Navigation onSignUpClick={handleSignUpClick} onSignInClick={handleSignInClick} />
      {showSignUp && <SignUpForm />}
      {showSignIn && <LoginForm />}

      <br />
      <h2> My PostgreSQL Data:</h2>
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

      <br />
      <h2>My MongoDB Data:</h2>
      <pre>{JSON.stringify(mongoData, null, 2)}</pre>
      </>
  );
};

export default HomePage;
