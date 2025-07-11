export interface ICategory {
  id: number;
  category: string;
  parent_category_id?: number;
  children?:{ id: number; category: string; }[]
}
