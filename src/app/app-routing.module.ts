import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './products/product-list.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
    { path:'products', component: ProductListComponent },
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