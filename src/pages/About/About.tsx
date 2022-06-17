import React, { useState } from 'react';

import styles from './About.module.scss';

export const About = () => {
  const [isOpen, setOpen] = useState(false);

  const handlerSetOpen = () => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <div>
        <h3 className={styles.title}>about</h3>
        <article className={styles.about}>
          <p>Привет! Я Миша, мне 24, а родом из Москвы.</p>
          <p>
            Я люблю футбол и бег, аналоговую фотографию, электронную и эксперементальную музыку.
          </p>
          <p>
            А ещё я front-end разработчик.{' '}
            <a
              href="https://drive.google.com/file/d/1vEICefWPqk6adgcDr6KRFZxP0c0FzvQH/view"
              target="_blank"
              className={styles.about__hire}>
              Hire me!
            </a>{' '}
            <button className={styles.about__skills_button} onClick={handlerSetOpen}>
              {isOpen !== true ? 'Show' : 'Hide'} skills
            </button>
          </p>
          <div className={styles.about__skills} hidden={!isOpen && true}>
            <ul className={styles.about__skills_content}>
              <li>HTML</li>
              <li>SASS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>React-Router</li>
              <li>Linux</li>
              <li>Git</li>
            </ul>
          </div>
        </article>
      </div>
    </>
  );
};
