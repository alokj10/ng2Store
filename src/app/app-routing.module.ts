import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ViewCartComponent } from './cart/view_cart.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { ProductDetailComponent } from './products/product/prod_detail.component';

export const routes: Routes = [
    { path:'products/:id', component: ProductListComponent },
    { path:'products', component: ProductListComponent },
    { path:'detail/:id', component: ProductDetailComponent },
    { path:'viewcart', component: ViewCartComponent },
    { path:'checkout', component: CheckoutComponent },
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