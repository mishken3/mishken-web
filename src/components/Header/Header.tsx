import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__home}>
        HOME
      </Link>
    </div>
  );
};
