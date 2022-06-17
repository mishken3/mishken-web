import React from 'react';

import { park, polaroid } from '../../assets/photos';
import { Photo } from './components/Photo';
import styles from './Photos.module.scss';
import { PhotosInfoType } from './Photos.types';

export const Photos = () => {
  const photosInfo: PhotosInfoType = {
    personal: {
      photo: park,
      description: 'Personal photos',
      alt: 'Evening park',
      link: 'https://www.instagram.com/mishken/',
    },
    analog: {
      photo: polaroid,
      description: 'Analog photos',
      alt: 'VDNH building',
      link: 'https://www.instagram.com/analog.misha/',
    },
  };

  return (
    <div className={styles.photos}>
      <h3>Photos</h3>

      <div className={styles.photos__components}>
        <Photo photoInfo={photosInfo.analog} />
        <Photo photoInfo={photosInfo.personal} />
      </div>
    </div>
  );
};
