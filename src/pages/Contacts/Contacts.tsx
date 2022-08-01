import React from 'react';

import { links } from '../../data/linksData';
import styles from './Contacts.module.scss';

export const Contacts = () => (
  <div className={styles.contacts}>
    <div className={styles.contacts__links}>
      <a href={links.telegram} target="_blank">
        Telegram
      </a>
      <a href={links.github} target="_blank">
        Github
      </a>
      <a href={links.resume} target="_blank">
        Resume
      </a>
      <a href="mailto:mishken3@gmail.com" target="_blank">
        mishken3@gmail.com
      </a>
    </div>
  </div>
);
