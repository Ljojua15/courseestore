import { Component, computed, inject } from '@angular/core';
import {faHeart, faSearch, faShoppingCart, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../lib/services/category.service';
@Component({
  selector: 'estore-layout-header',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.scss'],
})
export class LayoutHeaderComponent {
  private readonly categoryService = inject(CategoryService)

  public readonly $options$ = computed(() => {
    return this.categoryService.$topLevelCategory$()
  })
  public faSearch: any = faSearch;
  public faUserCircle: any = faUserCircle;

  public readonly options = ['Men', 'Women', 'Kids'];
  protected readonly faHeart = faHeart;
  protected readonly faShoppingCart = faShoppingCart;
}
