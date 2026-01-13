import { Routes } from '@angular/router';
import { Products } from './products/products';

export const PRODUCT_ROUTES: Routes = [
  {
    path: '', // This must be empty so it matches /products exactly
    component: Products
  }
];
