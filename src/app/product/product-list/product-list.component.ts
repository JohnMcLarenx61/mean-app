import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})

//getProductsを利用して、一覧に表示するProducts取り出す。=>product.service.ts
export class ProductListComponent implements OnInit {
  products: any;
  constructor(private productService: ProductService) { };
  ngOnInit() {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => {
        this.products = data
      },
      (err) => {console.error('次のエラーが発生しました ' + err);}
    )
  }
}
