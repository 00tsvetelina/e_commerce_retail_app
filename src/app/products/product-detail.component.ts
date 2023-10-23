import { Component, OnInit } from '@angular/core';

import { Product, ProductResolved } from './product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../user/auth.service';
import { MessageService } from '../messages/message.service';
import { AppComponent } from '../app.component';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage = '';
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute,
              private cartService: CartService,
              private authService: AuthService,
              private messageService: MessageService, 
              private appComponent: AppComponent) { 
                this.isLoggedIn = authService.isLoggedIn;
              }

    ngOnInit(): void {
      const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
      
      if(resolvedData.error){
        this.errorMessage = String(resolvedData.error);
        console.log('error message', this.errorMessage);
      }

      this.onProductRetrieved(resolvedData.product!);
    }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    this.messageService.addMessage(`${product.productName} successfully added to cart`);
    this.appComponent.displayMessages();

  }
}
