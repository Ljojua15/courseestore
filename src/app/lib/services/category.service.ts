import { inject, Injectable } from '@angular/core';
import {ICategory} from '../interfaces/category.interface';
import {CategoryConfig} from '../configs/category.config';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpService);

  public CategoryConfig$: Observable<ICategory[]> = this.http.getCategoris$();

  getAllCategories(): ICategory[] {
    return CategoryConfig;
  }



}
