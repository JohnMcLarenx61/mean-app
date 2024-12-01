import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {
  //Productの型指定。
  product: any;
  // product: Product | undefined;
  //遷移後にする実施する処理
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  ngOnInit() {
    //routeParamsを取得する。
    this.route.paramMap.subscribe(params => {
      //Routeから変数ProductIdにあたる値を取得
      const productIdFromRoute = String(params.get('productId'));
      //Products.tsからProduct情報を取得
      const productObservable = this.productService.getProductById(productIdFromRoute);
      
    productObservable.subscribe(
      (data) => {
        this.product = data
      },
      (err) => {console.error('次のエラーが発生しました ' + err);}
    )
    })
  }
}