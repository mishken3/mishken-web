export interface PhotoInfoType {
  photo: string;
  description: string;
  alt: string;
  link: string;
}

export interface PhotosInfoType {
  personal: PhotoInfoType;
  analog: PhotoInfoType;
}
