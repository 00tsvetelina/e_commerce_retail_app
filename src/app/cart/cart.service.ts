import { Injectable } from '@angular/core';
import { Product } from '../products/product';
import { HttpClient } from '@angular/common/http';
import { Shipping } from '../shipping/shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  shipping: Shipping[] = [];
  shippingUrl: string = '../assets/shipping.json';
  

  constructor(private http: HttpClient) { }

  addToCart(product: Product): void {
    this.items.push(product);
    // console.log(this.items);
    
  }

  getItems(): Product[] {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

}
