import { Category } from "./Category";

export interface Meta {
  id: number;
  description: string;
  title: string;
  status: number;
  categories: Category[];
}
