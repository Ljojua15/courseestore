import { Injectable } from '@angular/core';
import {IProduct} from '../interfaces/products.interface';
import {productsConfig} from '../configs/products.config';

@Injectable()
export class ProductsService {

  constructor() { }
  getProducts(): IProduct[] {
    return productsConfig;
  }

}
