import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewOrdersComponent } from './orders/view-orders.component';

export const routes: Routes = [
    { path: 'orders', component: ViewOrdersComponent },
    { path: '', redirectTo: 'orders', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AdminRoutingModule{

}