import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__links}>
        <Link to="/about">about</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/photos">photos</Link>
        <Link to="/contacts">contacts</Link>
      </div>
    </div>
  );
};
