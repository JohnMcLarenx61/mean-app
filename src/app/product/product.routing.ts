import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const productRoutes: Routes = [
    { path: '', component: ProductListComponent },
    { path: 'detail/:productId', component: ProductDetailComponent }
];