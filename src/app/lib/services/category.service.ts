import { Injectable } from '@angular/core';
import {ICategory} from '../interfaces/category.interface';
import {CategoryConfig} from '../configs/category.config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getAllCategories(): ICategory[] {
    return CategoryConfig;
  }

}
