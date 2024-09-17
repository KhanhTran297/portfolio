export type projectType = {
  id: string;
  title: string;
  member: string;
  role: string;
  responsibilities: string[];
  image: string[];
  description: string;
  technologies: {
    frontend: string[];
    backend: string[];
    link?: string;
  };
  account?: {
    role: string;
    email: string;
    password: string;
  }[];
  info?: string;
  github: string;
  deploy: string;
};
