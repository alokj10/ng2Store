import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ViewCartComponent } from './cart/view_cart.component';
import { CheckoutComponent } from './products/checkout/checkout.component';

export const routes: Routes = [
    { path:'products/:id', component: ProductListComponent },
    { path:'products', component: ProductListComponent },
    { path:'viewcart', component: ViewCartComponent },
    { path:'checkout', component: CheckoutComponent },
    { path: '', redirectTo: '**', pathMatch: 'full' },
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