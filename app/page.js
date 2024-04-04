import Image from "next/image";
import styles from "./page.module.css";
import { sql } from '@vercel/postgres'; // Importing sql once

export default async function Home() {
  const { rows: courses } = await sql`SELECT * FROM courses;`;

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
        </ul>
      </nav>
      <br />
      <table>
        <thead>
          <tr>
            {courses.length > 0 && Object.keys(courses[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              {Object.values(course).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
