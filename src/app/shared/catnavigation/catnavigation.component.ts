import { Component, computed, inject } from '@angular/core';
import { CategoryService } from '../../lib/services/category.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'estore-catnavigation',
  imports: [CommonModule],
  templateUrl: './catnavigation.component.html',
  styleUrl: './catnavigation.component.scss'
})
export class CatnavigationComponent {
  private readonly categoryService = inject(CategoryService)

  public $topLevelCategory$ = computed(() => {
    return this.categoryService.$topLevelCategory$()
  })
}
