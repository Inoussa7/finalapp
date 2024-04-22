'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import UserLessons from '../components/UserLessons';
import "./globals.css";

const RootLayout = ({ children }) => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showUserLessons, setShowUserLessons] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false);
    setShowUserLessons(false);
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false);
    setShowUserLessons(false);
  };

  const toggleUserLessons = () => {
    setShowUserLessons(!showUserLessons);
    setShowLoginForm(false); 
    setShowSignUpForm(false); 
  };

  return (
    <html>
    <body>
      <Head>
        <link rel="stylesheet" href="/fonts/inter.css" />
      </Head>
      <Header />
      <Navigation 
        toggleLoginForm={toggleLoginForm} 
        toggleSignUpForm={toggleSignUpForm} 
        toggleUserLessons={toggleUserLessons} 
      />
      {showLoginForm && <LoginForm />}
      {showSignUpForm && <SignUpForm />}
      {showUserLessons && <UserLessons />}
      {children}
    </body>
  </html>
  );
};

export default RootLayout;