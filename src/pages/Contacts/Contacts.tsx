import React from 'react';

import styles from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h3>contacts</h3>

      <div className={styles.contacts__links}>
        <a href="https://t.me/mishken">Telegram</a>
        <a href="https://github.com/mishken3">Github</a>
        <a href="https://drive.google.com/file/d/1vEICefWPqk6adgcDr6KRFZxP0c0FzvQH/view">Resume</a>
        <a href="mailto:mishken3@gmail.com">Email</a>
      </div>
    </div>
  );
};
