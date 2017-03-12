import { Component, Input } from '@angular/core';
import { IOrder } from '../../model/order.interface';
import { OrderService } from '../../services/order.service';

@Component({
    selector:   'so-single-order',
    templateUrl:    './single-order.component.html',
    styleUrls:  ['./single-order.component.css']   
})
export class SingleOrderComponent{
    order_item: IOrder;
    @Input() order_id: number;

    constructor(private orderService: OrderService){
        console.log('single order');
        this.order_item = orderService.getOrderById(this.order_id);
    }
}