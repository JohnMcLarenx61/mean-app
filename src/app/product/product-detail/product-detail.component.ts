import { Component } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
    //Productの型指定。
    product: Product | undefined;
    //遷移後にする実施する処理
    constructor(private route: ActivatedRoute) {}
    ngOnInit() {
      //routeParamsを取得する。
      const routeParams = this.route.snapshot.paramMap;

      //Routeから変数ProductIdにあたる値を取得
      const productIdFromRoute = Number(routeParams.get('productId'));
  
      //Products.tsからProduct情報を取得
      this.product = products.find(
        (product) => product.id === productIdFromRoute
      );
}}