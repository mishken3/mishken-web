import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../Header';
import { NavBar } from '../NavBar';
import styles from './Wrapper.module.scss';

export const Wrapper = () => {
  return (
    <>
      <div className={styles.page}>
        <Header />
        <div className={styles.page__layout}>
          <div className={styles.page__layout_nav}>
            <NavBar />
          </div>
          <img alt="bill" src="https://www.fillmurray.com/g/200/300" />
          <Outlet />
        </div>
      </div>
    </>
  );
};
