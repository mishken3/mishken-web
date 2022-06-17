import React from 'react';

import { projectsData } from '../../data/projectsData';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const projectsComp = projectsData.map((project) => {
    return (
      <div key={project.name} className={styles.project}>
        <h4 className={styles.project__name}>{project.name}</h4>
        <p className={styles.project__description}>{project.desc}</p>
        <div className={styles.project__links}>
          <a href={project.github} target="_blank">
            Github
          </a>
          &nbsp; | &nbsp;
          <a href={project.global} target="_blank">
            Link
          </a>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.portfolio}>
      <h3>portfolio</h3>

      <div className={styles.portfolio__content}>{projectsComp}</div>
    </div>
  );
};
