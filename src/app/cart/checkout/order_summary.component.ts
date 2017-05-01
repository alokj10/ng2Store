import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CartService } from '../../../app/services/cart.service';

@Component({
    selector: 'so-order-summary',
    templateUrl: './order_summary.component.html'
})
export class OrderSummaryComponent implements OnInit{
    orderItems: any[] = [];
    @Input() totalAmount: number;
    @Input() shippingCharge: number;
    @Input() currencySymbol: string;
    subscription: Subscription;
    totalAmountStr: string;
    
    constructor(private cartService: CartService){
                    this.cartService.isCartVisible = false;
                    this.subscription = this.cartService.payloadTotal$.subscribe((t) => this.populateOrderItems_Total(t));
                    this.subscription = this.cartService.payloadShippingTotal$.subscribe((s) => this.populateOrderItems_Shipping(s));
             }

    ngOnInit(){
        this.populateOrderItems_Total(this.totalAmount ? this.totalAmount : 0);
        this.populateOrderItems_Shipping(this.shippingCharge ? this.shippingCharge : 0);
    }

    populateOrderItems_Total(total: number){
        this.totalAmount = total;
        var subtotalItem = this.orderItems.find(x => x.label === 'Order Subtotal');
        if(!subtotalItem){
            let orderItem: any = {};
            orderItem.label = 'Order Subtotal';
            orderItem.amount = this.currencySymbol + ' ' + total;
            this.orderItems.push(orderItem);
        }
        else{
            subtotalItem.amount = this.currencySymbol + ' ' + total;
        }
        let totAmt = total + (this.shippingCharge ? this.shippingCharge : 0);
        this.totalAmountStr = this.currencySymbol + ' ' + totAmt;
    }

    populateOrderItems_Shipping(shipping: number){
        this.shippingCharge = shipping;
        var shippingItem =  this.orderItems.find(x => x.label === 'Shipping');
        if(!shippingItem){
            let orderItem: any = {};
            orderItem.label = 'Shipping';
            orderItem.amount = shipping === 0 ? 'FREE' : this.currencySymbol + ' ' + shipping;
            this.orderItems.push(orderItem);
        }
        else{
            shippingItem.amount = shipping === 0 ? 'FREE' : this.currencySymbol + ' ' + shipping;
        }
        let totAmt = (this.totalAmount ? this.totalAmount : 0) + shipping;
        this.totalAmountStr = this.currencySymbol + ' ' + totAmt;
    }

    updateTotal(amount: number){

    }

}