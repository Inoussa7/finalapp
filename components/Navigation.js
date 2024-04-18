// components/Navigation.js
import Link from 'next/link';  
import styles from '../app/Navigation.module.css'; 

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
                <li className={styles.navItem}><Link href="/login" className={styles.navLink}>Login</Link></li>
                <li className={styles.navItem}><Link href="/signup" className={styles.navLink}>Sign up</Link></li>
                <li className={styles.navItem}><Link href="/view" className={styles.navLink}>View</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
