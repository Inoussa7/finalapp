// components/Navigation.js

import Link from 'next/link';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import styles from '../app/Navigation.module.css';

const Navigation = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowSignUpForm(false); // Close signup form if open
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLoginForm(false); // Close login form if open
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><button className={styles.navButton} onClick={toggleLoginForm}>Login</button></li>
        <li className={styles.navItem}><button className={styles.navButton} onClick={toggleSignUpForm}>Sign up</button></li>
        <li className={styles.navItem}><Link href="/view" className={styles.navLink}>View</Link></li>
      </ul>
      {showLoginForm && <LoginForm />}
      {showSignUpForm && <SignUpForm />}
    </nav>
  );
};

export default Navigation;
