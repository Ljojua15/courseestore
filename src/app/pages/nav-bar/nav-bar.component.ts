import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from '../../lib/services/category.service';
import {ICategory} from '../../lib/interfaces/category.interface';
import {CommonModule, NgForOf} from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'estore-nav-bar',
  imports: [
    CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  public category: ICategory[] = [];
  private categoryService = inject(CategoryService)

  public CategoryConfig$: Observable<ICategory[]> = this.categoryService.CategoryConfig$.pipe(
    map((x) => {
      console.log(x);
      const categories = x.filter(category => console.log(category?.category, 'test'));
      return {
        ...x,

      }
    })
  );


  getCategories(parentId?: number):ICategory[] {
    return this.category.filter(category => category.subcategory === parentId)
  }

}
