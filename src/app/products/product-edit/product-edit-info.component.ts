import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';

@Component({
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.css']
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage: string = '';
  product?: Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("ico", this.errorMessage)
    this.route.parent?.data.subscribe(data => {
      if(this.productForm) {
        this.productForm.reset();
      }
      this.product = data['resolvedData'].product;
    })
  }
}
