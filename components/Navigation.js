// components/Navigation.js
import Link from 'next/link';  
import styles from './app/Navigation.module.css'; 

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                <li className={styles.navItem}><Link href="/"><a className={styles.navLink}>Home</a></Link></li>
                <li className={styles.navItem}><Link href="/login"><a className={styles.navLink}>Login</a></Link></li>
                <li className={styles.navItem}><Link href="/signup"><a className={styles.navLink}>Sign up</a></Link></li>
                <li className={styles.navItem}><Link href="/view"><a className={styles.navLink}>View</a></Link></li>
                {/* More nav items */}
            </ul>
        </nav>
    );
};

export default Navigation;
