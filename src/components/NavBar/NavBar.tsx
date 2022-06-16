import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

export const NavBar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__links}>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/about">about</Link>
        <Link to="/contacts">contacts</Link>
        <Link to="/credits">credits</Link>
      </div>
    </div>
  );
};
