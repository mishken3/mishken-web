import cn from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.scss';

interface GetClassNamesProps {
  isActive: boolean;
}
type GetClassNames = (props: GetClassNamesProps) => string;

export const NavBar = () => {
  const getClassNames: GetClassNames = ({ isActive }) => cn(isActive && styles.nav__links_active);

  return (
    <div className={styles.nav}>
      <div className={styles.nav__links}>
        <NavLink className={getClassNames} to="/about">
          about
        </NavLink>
        <NavLink className={getClassNames} to="/portfolio">
          portfolio
        </NavLink>
        <NavLink className={getClassNames} to="/photos">
          photos
        </NavLink>
        <NavLink className={getClassNames} to="/contacts">
          contacts
        </NavLink>
        <NavLink className={getClassNames} to="/cv">
          CV
        </NavLink>
      </div>
    </div>
  );
};
