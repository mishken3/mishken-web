import React from 'react';

import { photosData } from '../../data/photosData';
import { Photo } from './components/Photo';
import styles from './Photos.module.scss';

export const Photos = () => {
  return (
    <div className={styles.photos}>
      <div className={styles.photos__components}>
        <Photo photoInfo={photosData.analog} />
        <Photo photoInfo={photosData.personal} />
      </div>
    </div>
  );
};
