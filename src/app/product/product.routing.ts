import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const productRoutes: Routes = [
    { path: '', component: ProductListComponent, data: { title: 'Product List' }},
    { path: 'detail/:productId', component: ProductDetailComponent,data: { title: 'Product Detail' } }
];