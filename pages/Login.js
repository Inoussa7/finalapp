// pages/login.js

import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
      {showLoginForm ? (
        <div>
          <LoginForm />
          <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
        </div>
      ) : (
        <div>
          {/* Render SignUpForm component here */}
          <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
