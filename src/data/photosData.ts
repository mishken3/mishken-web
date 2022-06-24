import { park, polaroid } from '../assets/photos';
import { PhotosData } from './data.types';

export const photosData: PhotosData = {
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
