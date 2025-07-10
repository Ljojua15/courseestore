import {ICategory} from '../interfaces/category.interface';

export const CategoryConfig:ICategory[] =[
  {
    id:1,
    category:'Men'
    
  },
  {
    id:2,
    category:'Women'
  },
  {
    id:3,
    category:'kids'
  },
  {
    id:4,
    category:'Shoes',
    parent_category_id: 1
  },
  {
    id:5,
    category:'toys',
    parent_category_id: 3
  },
  {
    id:6,
    category:'dress',
    parent_category_id: 2
  },
  {
    id:7,
    category:'Shoes',
    parent_category_id: 3
  }

]
