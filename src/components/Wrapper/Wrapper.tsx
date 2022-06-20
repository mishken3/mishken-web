import React from 'react';
import { Outlet } from 'react-router-dom';

import { bw } from '../../assets/photos';
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
          <div className={styles.page__layout_photo}>
            <img
              className={styles.page__layout_photo_img}
              alt="black and white from the back"
              src={bw}
            />
          </div>
          <div className={styles.page__layout_content}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
