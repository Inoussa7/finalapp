// components/Navigation.js
import UserLessons from './UserLessons';
import Link from 'next/link';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import styles from '../app/Navigation.module.css';

const Navigation = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showUserLessons, setShowUserLessons] = useState(false); // New state variable

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false); // Close signup form if open
    setShowUserLessons(false); // Close user lessons if open
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false); // Close login form if open
    setShowUserLessons(false); // Close user lessons if open
  };

  const toggleUserLessons = () => { // New toggle function
    setShowUserLessons(!showUserLessons);
    setShowLoginForm(false); // Close login form if open
    setShowSignUpForm(false); // Close signup form if open
  };
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
          <li className={styles.navItem}><button className={styles.navButton} onClick={toggleLoginForm}>Login</button></li>
          <li className={styles.navItem}><button className={styles.navButton} onClick={toggleSignUpForm}>Sign up</button></li>
          <li className={styles.navItem}><button className={styles.navButton} onClick={toggleUserLessons}>View</button></li>
        </ul>
      </nav>
      {showLoginForm && <LoginForm />}
      {showSignUpForm && <SignUpForm />}
      {showUserLessons && <UserLessons />} 
    </>
  );
};
export default Navigation;
