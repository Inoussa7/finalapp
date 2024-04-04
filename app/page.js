import Image from "next/image";
import styles from "./page.module.css";
import { sql } from '@vercel/postgres';

export default async function Home() {
  const returned = await sql`SELECT * FROM ealdata;`;
  let stringedReturn = JSON.stringify(returned.rows);
  let dataArray = returned.rows;

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
      <br></br>
      <table>
        <thead>
          <tr>
            {dataArray.length > 0 && Object.keys(dataArray[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {dataArray.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
