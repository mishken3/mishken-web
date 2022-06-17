import React from 'react';
import { Link } from 'react-router-dom';

import { notfound } from '../../assets/photos';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h1 className={styles.notfound__title}>404 Not Found</h1>

      <img src={notfound} alt="Page not found" className={styles.notfound__img} />
      <p className={styles.notfound__text}> Ты по-моему перепутал</p>

      <Link to="/" className={styles.notfound__button}>
        Homepage
      </Link>
    </div>
  );
};
