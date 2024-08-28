"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './../../styles/navbar/navbar.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Image
            src='/img/image_360-1.png'
            alt="Logo"
            width={100}
            height={40}
            className={styles.logo}
          />
        </div>

        {/* Hamburger menu for mobile view */}
        <div className={styles.hamburger} onClick={handleToggle}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Navigation list */}
        <ul className={`${styles.navList} ${isNavOpen ? styles.show : ''}`}>
          <li className={styles.navItem}>Home</li>
          <li className={styles.navItem}>Courses</li>
          <li className={styles.navItem}>About</li>
          <li className={styles.navItem}>FAQ</li>
        </ul>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="What do you want to learn?"
            className={styles.searchBar}
          />
        </div>
        <div className={styles.authButtons}>
          <button className={styles.loginButton}>Login</button>
          <button className={styles.joinButton}>Join for Free</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default Navbar;
