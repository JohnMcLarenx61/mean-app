import { Routes, provideRouter } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { productRoutes } from './product/product.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' }
},
  {
        path: 'products',
        component: ProductComponent,
        children: productRoutes
}
];

export const appProviders = [
    provideRouter(routes)
];