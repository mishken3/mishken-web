import { park, polaroid } from '../assets/photos';

/** TODO: будет круто еще и типизировать **/
export const photosData = {
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
