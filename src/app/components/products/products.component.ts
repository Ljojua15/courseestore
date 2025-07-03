import {Component, inject, OnInit} from '@angular/core';
import {ProductsService} from '../../lib/services/products.service';
import {IProduct} from '../../lib/interfaces/products.interface';
import {CommonModule} from '@angular/common';
import {RatingComponent} from '../../shared/rating/rating.component';

@Component({
  selector: 'estore-products',
  imports: [CommonModule, RatingComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  public CONST_IMAGES:string = './assets/images/shop-';

  products: IProduct[] = [];

  private productsService = inject(ProductsService);

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }


}
