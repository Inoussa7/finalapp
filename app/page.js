import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1>Welcome to TEAC 882B</h1>
          <h2>Database and Interactive Web Development</h2>
          <h2>Trilingual Learning App</h2>
        </div>
      </header>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a className={styles.navLink} href="#Home">Home</a></li>
          <li className={styles.navItem}><a className={styles.navLink} href="#About">Login</a></li>
          <li className={styles.navItem}><a className={styles.navLink} href="#Contact">Sign up</a></li>
          <li className={styles.navItem}><a className={styles.navLink} href="#Contact">View</a></li>
          {/* More nav items */}
        </ul>
      </nav>
      
    </>
  );
}