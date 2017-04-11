import { Component, Input, OnInit } from '@angular/core';
import { ViewCartComponent } from '../../cart/view_cart.component';

@Component({
    selector: 'so-order-summary',
    templateUrl: './order_summary.component.html'
})
export class OrderSummaryComponent implements OnInit{
    orderItems: any[] = [];
    @Input() totalAmount: number;
    @Input() shippingCharge: number;
    @Input() currencySymbol: string;
    totalAmountStr: string;

    constructor(){

    }

    ngOnInit(){
        this.populateOrderItems();
    }

    populateOrderItems(){
        let orderItem: any = {};
        orderItem.label = 'Order Subtotal';
        orderItem.amount = this.currencySymbol + ' ' + this.totalAmount;
        this.orderItems.push(orderItem);
        orderItem = {}; 
        orderItem.label = 'Shipping';
        orderItem.amount = this.shippingCharge === 0 ? 'FREE' : this.currencySymbol + ' ' + this.shippingCharge;
        this.orderItems.push(orderItem);

        let totAmt = this.totalAmount + this.shippingCharge;
        this.totalAmountStr = this.currencySymbol + ' ' + totAmt;
    }

}