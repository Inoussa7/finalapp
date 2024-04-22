import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import SignUpForm from '../../components/SignUpForm';
import LoginForm from '../../components/LoginForm';
import styles from "../app/Navigation.module.css";
import { sql } from '@vercel/postgres'; 
import dbConnect from '../../utils/dbConnect';
import ErrorBoundary from '../../components/ErrorBoundary';

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const [mongoData, setMongoData] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showUserLessons, setShowUserLessons] = useState(false);

  const toggleLoginForm = () => setShowLoginForm(!showLoginForm);
  const toggleSignUpForm = () => setShowSignUpForm(!showSignUpForm);
  const toggleUserLessons = () => setShowUserLessons(!showUserLessons);

  const fetchPostgresData = async () => {
    try {
      const returned = await sql`SELECT * FROM userinfo`;
      setUsers(returned.rows);
    } catch (error) {
      console.error('Error fetching PostgreSQL data:', error);
    }
  };

  const fetchMongoLessons = async () => {
    try {
      const res = await fetch('/api/lessons');
      const lessonsData = await res.json();
      setLessons(lessonsData);
    } catch (error) {
      console.error('Error fetching MongoDB lessons data:', error);
    }
  };

  const fetchMongoData = async () => {
    try {
      const res = await fetch('/api/mongoData');
      const mongoData = await res.json();
      setMongoData(mongoData);
    } catch (error) {
      console.error('Error fetching MongoDB data:', error);
    }
  };

  useEffect(() => {
    fetchPostgresData();
    fetchMongoData();
    fetchMongoLessons();
  }, []);

  return (
    <>
      <Header />
      <Navigation toggleUserLessons={toggleUserLessons} />
    {showLoginForm && <LoginForm />}
    {showSignUpForm && <SignUpForm />}
    {showUserLessons && <UserLessons />}
      

      <h2>My PostgreSQL Data:</h2>
      <table>
        <thead>
          <tr>
            {users.length > 0 && Object.keys(users[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value instanceof Date ? value.toISOString() : value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <h2>My MongoDB Data:</h2>
      <pre>{JSON.stringify(mongoData, null, 2)}</pre>

      <h2>My MongoDB Lessons Data:</h2>
      <pre>{JSON.stringify(lessons, null, 2)}</pre>
    </>
  );
};

export default HomePage;
