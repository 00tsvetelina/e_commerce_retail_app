import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { ShippingService } from '../shipping/shipping.service';
import { Observable } from 'rxjs';
import { Shipping } from '../shipping/shipping';


@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  shippingPrices!: Observable<Shipping[]>

  constructor(private cartService: CartService,
              private shippingService: ShippingService) { }

  ngOnInit(): void {
    this.shippingPrices = this.shippingService.getShippingPrices();
    console.log(this.items)    
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }
  
}
