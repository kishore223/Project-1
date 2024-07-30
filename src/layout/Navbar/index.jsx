import React from 'react';
import styles from './navbar.module.css';
import { FaBell, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.logo}></div>
        <h1 className={styles.companyName}>Company Name</h1>
      </div>
      <div className={styles.rightSection}>
        <span className={styles.userName}>Kishore Murugan</span>
        <button className={styles.iconButton}>
          <FaBell className={styles.icon} />
        </button>
        <button className={styles.iconButton}>
          <FaUser className={styles.icon} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;