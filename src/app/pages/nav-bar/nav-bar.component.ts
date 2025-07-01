import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from '../../lib/services/category.service';
import {ICategory} from '../../lib/interfaces/category.interface';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'estore-nav-bar',
  imports: [
    CommonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent implements OnInit {
  public category: ICategory[] = [];
  private categoryService = inject(CategoryService)

  ngOnInit(): void {
    this.category = this.categoryService.getAllCategories()
    console.log(this.getCategories(3),' test')
  }

  getCategories(parentId?: number):ICategory[] {
    return this.category.filter(category => category.subcategory === parentId)
  }

}
