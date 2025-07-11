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

  private readonly categoryService = inject(CategoryService)

  public allCategories$ = this.categoryService.CategoryConfig$
  
  $test$ = this.categoryService.$topLevelCategory$


}
