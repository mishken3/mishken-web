import React from 'react';

import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const projects = [
    {
      name: 'Blockchanin calculator',
      desc: 'first desc',
      github: 'www.github.com',
      global: 'www.link.com',
    },
    {
      name: 'MNTN',
      desc: 'Landing page about traveling pleasure.',
      github: 'https://github.com/mishken3/mntn-project',
      global: 'www.link.com',
    },
    {
      name: 'third name',
      desc: 'third desc',
      github: 'www.github.com',
      global: 'www.link.com',
    },
  ];

  const projectsComp = projects.map((project) => {
    return (
      <div className={styles.project}>
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
      <h3>Portfolio</h3>

      <div className={styles.portfolio__content}>{projectsComp}</div>
    </div>
  );
};
