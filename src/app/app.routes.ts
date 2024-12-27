import { Routes, provideRouter } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { productRoutes } from './product/product.routing';
import { authRoutes } from './auth/auth.routing';

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
},
{
  path: 'auth',
  component: AuthComponent,
  children: authRoutes
}
]

export const appProviders = [
    provideRouter(routes)
];