import { Component } from '@angular/core';
import { IOrder } from '../../model/order.interface';
import { OrderService } from '../../services/order.service';

@Component({
    selector:   'so-view-orders',
    templateUrl:    './view-orders.component.html',
    styleUrls:  ['./view-orders.component.css']   
})
export class ViewOrdersComponent{
    order_items: IOrder[];

    constructor(private orderService: OrderService){
        console.log('view orders');
        orderService.getOrders().then(o => this.order_items = o);
    }
}