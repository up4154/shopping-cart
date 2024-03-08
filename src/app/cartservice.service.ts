import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  cartItems: Product[] = [];

  constructor() { }

  addToCart(product: Product) {
    this.cartItems.push(product);
    console.log(this.cartItems)
  }
}
