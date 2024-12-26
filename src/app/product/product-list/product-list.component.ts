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
      (err) => { console.error('次のエラーが発生しました ' + err); }
    )
  }

 selectTab(event: MouseEvent, tabId: string) {
    event.preventDefault(); let tabElement = document.querySelector(`#${tabId}`);
     if (tabElement) {
      tabElement.classList.add('show', 'active');
      // siblings() は存在しないので代わりに親要素を探す 
      const siblingTabs = tabElement.parentElement?.querySelectorAll('.tab-pane'); 
      siblingTabs?.forEach((sibling) => { 
        if (sibling !== tabElement) { 
          sibling.classList.remove('show', 'active'); 
        } 
      });
    }
  }
}
