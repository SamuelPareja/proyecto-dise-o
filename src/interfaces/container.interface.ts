import type { Tag } from "./tag.interface";

export interface Container {
  name: string;
  description: string[];
  tags?: Tag[];
  imageUrl?: string;
  repositoryUrl?: string;
  demoUrl?: string;
}
