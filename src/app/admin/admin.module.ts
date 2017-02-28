import { NgModule } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ViewOrdersComponent } from './orders/view-orders.component';

@NgModule({
    declarations:   [
        ViewOrdersComponent
    ],
    providers: [ OrderService ]
})
export class AdminModule{
}