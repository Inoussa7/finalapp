// components/Header.js
import Image from 'next/image'; 
import styles from '../app/Header.module.css'; 

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <h1>Welcome to TEAC 882B</h1>
                <h2>Database and Interactive Web Development</h2>
                <h2>Language Learning App</h2>
                <h2>Final Project</h2>
            </div>
        </header>
    );
};

export default Header;
