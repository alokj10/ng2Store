import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ViewCartComponent } from './cart/view_cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ProductDetailComponent } from './products/product/prod_detail.component';

import { ViewOrdersComponent } from './admin/orders/view-orders.component';
import { ViewProductsComponent } from './admin/products/view-products.component';
import { AddNewProductComponent } from './admin/products/add-new/add-new-product.component';
import { AddCategoryComponent } from './admin/categories/add-category.component';
import { ViewCategoriesComponent } from './admin/categories/view-categories.component';
import { CategoryMainComponent } from './admin/categories/category-main.component';

export const routes: Routes = [
    { path:'products/:id', component: ProductListComponent },
    { path:'products', component: ProductListComponent },
    { path:'detail/:id', component: ProductDetailComponent },
    { path:'viewcart', component: ViewCartComponent },
    { path:'checkout', component: CheckoutComponent },
    // { path:'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path:'admin', component: ViewOrdersComponent },
    { path:'admin/products', component: ViewProductsComponent },
    { path:'admin/products/new', component: AddNewProductComponent },
    { path:'admin/categories', component: CategoryMainComponent },
    { path:'admin/categories/new', component: AddCategoryComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    declarations: [
        PageNotFoundComponent
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}