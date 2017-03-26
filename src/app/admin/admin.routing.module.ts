import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAppComponent } from './admin-app.component';
import { ViewOrdersComponent } from './orders/view-orders.component';
import { ViewProductsComponent } from './products/view-products.component';
import { AddNewProductComponent } from './products/add-new/add-new-product.component';
import { AddCategoryComponent } from './categories/add-category.component';
import { ViewCategoriesComponent } from './categories/view-categories.component';
import { CategoryMainComponent } from './categories/category-main.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminAppComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'products', component: ViewProductsComponent },
          { path: 'products/new', component: AddNewProductComponent },
          { path: 'orders', component: ViewOrdersComponent },
          { path: 'categories', component: CategoryMainComponent },
          { path: '', redirectTo: 'orders', pathMatch: 'full' }
        ]
      }
    ]
  }
];

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}