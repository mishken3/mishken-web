import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

export const NavBar = () => (
  <div className={styles.nav}>
    <div className={styles.nav__links}>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/portfolio">portfolio</NavLink>
      <NavLink to="/photos">photos</NavLink>
      <NavLink to="/contacts">contacts</NavLink>
    </div>
  </div>
);
