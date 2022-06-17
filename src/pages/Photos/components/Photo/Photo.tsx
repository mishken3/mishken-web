import React, { FC } from 'react';

import { PhotoInfoType } from '../../Photos.types';
import styles from './Photo.module.scss';

interface PhotoProps {
  photoInfo: PhotoInfoType;
}

export const Photo: FC<PhotoProps> = ({ photoInfo }) => {
  return (
    <div className={styles.photo}>
      <img src={photoInfo.photo} alt={photoInfo.alt} className={styles.photo__img} />
      <a href={photoInfo.link} target="_blank" className={styles.photo__description}>
        {photoInfo.description}
      </a>
    </div>
  );
};
