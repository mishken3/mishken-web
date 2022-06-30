import React from 'react';

import { ProjectData } from '../../data/data.types';
import { projectsData } from '../../data/projectsData';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const projectsComp = projectsData.map((project: ProjectData) => {
    const isGlobalLinkExist = Object.keys(project).includes('global');

    return (
      <div key={project.name} className={styles.project}>
        <h4 className={styles.project__name}>{project.name}</h4>
        <p className={styles.project__description}>{project.desc}</p>
        <p className={styles.project__tools}>{project.tools}</p>
        <div className={styles.project__links}>
          <a href={project.github} target="_blank">
            Github
          </a>

          {isGlobalLinkExist && (
            <>
              <span>&nbsp;|&nbsp;</span>
              <a href={project.global} target="_blank">
                Link
              </a>
            </>
          )}
        </div>
      </div>
    );
  });

  return (
    <div className={styles.portfolio}>
      <div className={styles.portfolio__content}>{projectsComp}</div>
    </div>
  );
};
