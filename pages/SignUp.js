// pages/signup.js

import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUpPage = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(true);

  const toggleForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  return (
    <div>
      {showSignUpForm ? (
        <div>
          <SignUpForm />
          <p>Already have an account? <button onClick={toggleForm}>Login</button></p>
        </div>
      ) : (
        <div>
          {/* Render LoginForm component here */}
          <p>Don't have an account? <button onClick={toggleForm}>Sign Up</button></p>
        </div>
      )}
    </div>
  );
};

export default SignUpPage;
