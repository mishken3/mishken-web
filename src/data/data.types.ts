export interface ProjectData {
  name: string;
  desc: string;
  tools: string;
  github: string;
  global?: string;
}

export interface PhotosData {
  [key: string]: {
    photo: string;
    description: string;
    alt: string;
    link: string;
  };
}

export interface Links {
  resume: string;
  telegram: string;
  github: string;
  email: string;
}
