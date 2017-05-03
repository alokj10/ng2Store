import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../model/order.interface';
import { OrderService } from '../../services/order.service';

@Component({
    selector:   'so-view-orders',
    templateUrl:    './view-orders.component.html',
    styleUrls:  ['./view-orders.component.css']   
})
export class ViewOrdersComponent implements OnInit{
    order_items: IOrder[];

    constructor(private orderService: OrderService){
        console.log('view orders');
        
    }

    ngOnInit() {
        this.orderService.getPendingOrders()
                    .subscribe(res => {
                        this.order_items = res;
                    },
                    err => {
                        console.log('error occured - ' + err);
                    });
    }
}