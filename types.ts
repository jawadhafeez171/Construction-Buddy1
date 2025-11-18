export interface Service {
  id: string;
  title: string;
  path: string;
  descriptions: string[];
  imageUrl: string;
  overview: string;
  keyFeatures: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  whyChooseUs: string;
}

export interface Package {
  name: string;
  price: string;
  description?: string;
  highlights: string[];
  isPopular?: boolean;
}

export enum ProjectCategory {
  RESIDENTIAL = 'Residential',
  COMMERCIAL = 'Commercial',
  INSTITUTIONAL = 'Institutional',
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  coverImage: string;
  images: string[];
}