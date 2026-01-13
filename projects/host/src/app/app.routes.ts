import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { Home } from './home/home';

export const routes: Routes = [
     {
    path: '',
    component: Home
  },
  {
    path: 'products',
    loadChildren: () => 
      loadRemoteModule('products', './routes').then(m => m.PRODUCT_ROUTES)
  },
];