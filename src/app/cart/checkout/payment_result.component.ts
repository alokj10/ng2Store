import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaymentService } from '../../services/payment.service';

@Component({
    template: `
        <div class="well">
            <h3>Processing...</h3>
            <p class="lead">
                {{payment_status_msg}}
            </p>
        </div>
    `
})
export class PaymentResultComponent implements OnInit{
    payment_status_msg: string;

    constructor(private route: ActivatedRoute,
                private paymentService: PaymentService){
        this.payment_status_msg = 'Please wait...';
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            let apiUrl = params['url'];
            // this.paymentService.callPaymentResult()
        })
    }

}