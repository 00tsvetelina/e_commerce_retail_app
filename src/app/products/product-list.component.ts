import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { AuthService } from '../user/auth.service';
import { MessageService } from '../messages/message.service';
import { AppComponent } from '../app.component';


@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  isLoggedIn: boolean;

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(private productService: ProductService,
                      private route: ActivatedRoute,
                      private cartService: CartService,
                      private messageService: MessageService, 
                      private authService:AuthService,
                      private router: Router,
                      private appComponent: AppComponent) { 
                        this.isLoggedIn = authService.isLoggedIn;}

  ngOnInit(): void {

    this.listFilter = this.route.snapshot.queryParamMap.get('filterBy') || '';
    this.showImage = this.route.snapshot.queryParamMap.get('showImage') === 'true';

    this.productService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    })
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  addToCart(product:Product){
    this.cartService.addToCart(product);
    this.messageService.addMessage(`${product.productName} successfully added to cart`);
    this.appComponent.displayMessages();
  }



}
