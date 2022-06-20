import React from 'react';

import { resumeLink } from '../../data/resumeLink';
import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.contacts__links}>
        <a href="https://t.me/mishken" target="_blank">
          Telegram
        </a>
        <a href="https://github.com/mishken3" target="_blank">
          Github
        </a>
        <a href={resumeLink} target="_blank">
          Resume
        </a>
        <a href="mailto:mishken3@gmail.com" target="_blank">
          Email
        </a>
      </div>
    </div>
  );
};
