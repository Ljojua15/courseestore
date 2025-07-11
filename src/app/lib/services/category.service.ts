import { inject, Injectable, signal } from '@angular/core';
import {ICategory} from '../interfaces/category.interface';
import {CategoryConfig} from '../configs/category.config';
import { HttpService } from './http.service';
import { BehaviorSubject, map, Observable, switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpService);

  public readonly update$ = new BehaviorSubject('')


  public CategoryConfig$: Observable<ICategory[]> = this.update$.pipe(
    switchMap(() => {
      return this.http.getCategoris$().pipe(
      map((res) => {

      const mainCategory = res.filter(c => !c.parent_category_id)
      const childCategory = res.filter(c => c.parent_category_id)
      const withGroups = mainCategory.map((item, i) => {
      const next = i + 1;
      const children = childCategory.filter(c => c.parent_category_id === next);

      return {
        ...item,
        children
      };
    });
      return withGroups
    })
  )
    })
  );
  
  public $topLevelCategory$ = toSignal(this.CategoryConfig$)


  getAllCategories(): ICategory[] {
    return CategoryConfig;
  }
  

}
