import React, { useState } from 'react';

import { links } from '../../data/linksData';
import styles from './About.module.scss';

export const About = () => {
  const [isSkillsOpen, setSkillsOpen] = useState(false);

  const handlerSetOpen = () => {
    setSkillsOpen((prevValueIsOpen) => !prevValueIsOpen);
  };

  return (
    <article className={styles.about}>
      <p>Привет! Я Миша, мне 24, а родом из Москвы.</p>
      <p>Я люблю футбол и бег, аналоговую фотографию, электронную и эксперементальную музыку.</p>
      <div>
        <p>А ещё я front-end разработчик:</p>
        <span className={styles.raif}>Raiffeisen Bank</span>

        <a hidden href={links.resume} target="_blank" className={styles.about__hire}>
          <s>Hire me!</s>
        </a>
        <button
          hidden
          type="button"
          className={styles.about__skills_button}
          onClick={handlerSetOpen}>
          {isSkillsOpen ? 'Hide' : 'Show'} skills
        </button>
      </div>
      {isSkillsOpen && (
        <div className={styles.about__skills}>
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
      )}
    </article>
  );
};
