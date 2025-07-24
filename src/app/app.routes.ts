import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';
import { CategoryList } from './category-list/category-list';
import { ProductAdd } from './product-add/product-add';
import { CategoryAdd } from './category-add/category-add';
import { BrandList } from './brand-list/brand-list';
import { BrandAdd } from './brand-add/brand-add';
import { UserList } from './user-list/user-list';
import { UserAdd } from './user-add/user-add';


export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'categories',
    component: CategoryList,
  },
  //   {
  //   path: 'brands',
  //   component: BrandList,
  // },
  //   {
  //   path: 'users',
  //   component: UserList,
  // },
  {
    path: 'product/:id/detail',
    component: ProductDetail,
    canActivate: [], // Add guards if needed
  },
  {
    path: 'products/add',
    component: ProductAdd,
  },
  {
    path: 'brands/add',
    component: BrandAdd,
  },
  {
    path: 'categories/add',
    component: CategoryAdd,
  },
  {
    path: 'brands',
    component: BrandList,
  },
  {
    path: 'users',
    component: UserList,
  },
   {
    path: 'users/add',
    component: UserAdd,
  },
];
