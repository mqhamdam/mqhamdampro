export interface Project {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl?: string;
  projectUrl?: string;
  sourceCodeUrl?: string;
  technologies: string[];
  dateAdded: string;
}
