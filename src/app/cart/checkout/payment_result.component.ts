import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentService } from '../../services/payment.service';
import { OrderService } from '../../services/order.service';

@Component({
    templateUrl: './payment_result.component.html'
})
export class PaymentResultComponent implements OnInit{
    payment_status_msg: string;
    private order_detail: any = null;

    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService,
                private orderService: OrderService){
        this.payment_status_msg = 'Please wait...';
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
               let purpose = params['purpose'];
               let orderId = params['orderId'];
               this.orderService.getOrderById(orderId)
                                .subscribe(res => {
                                    console.log('order - ' + res);
                                    this.order_detail = res;
                                });
        })
    }

}