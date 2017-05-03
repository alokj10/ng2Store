import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OrderService } from '../services/order.service';

@Component({
    template: `<div class="container">
            <div class="well">
                <h3>{{wait_message}}</h3>
                <h4>Please wait ... </h4>
            </div>
        </div>
    `
})
export class RedirectComponent implements OnInit{
    private wait_message: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private orderService: OrderService){
            this.wait_message = 'Redirecting ...';
    }

    ngOnInit(){
        // let redirectUrl = this.route.snapshot.queryParams['url'];
        
        //     let url = decodeURIComponent(redirectUrl);
        //     alert(url);
        //     window.location.href = redirectUrl;
        this.route.params.subscribe(params => {
            let purpose = params['purpose'];
            if(purpose === 'placeorder') {
                this.wait_message = 'Placing Order ...';
            }
        })


        this.route.queryParams.subscribe(params => {
            let redirectUrl = params['url'];
            // let url = decodeURIComponent(redirectUrl);
             alert(redirectUrl);
            if(redirectUrl === ''){
                return;
            }
            console.log('Redirecting to - ' + redirectUrl);
            this.router.navigate(['payment_result',{url: redirectUrl}]);
            // window.location.href = redirectUrl;

        });

        
        // this.route.params.subscribe(params => {
        //     let redirectUrl = params['url'];
        //     // let url = decodeURIComponent(redirectUrl);
        //      alert(redirectUrl);
        //     if(redirectUrl === ''){
        //         return;
        //     }
        //     console.log('Redirecting to - ' + redirectUrl);
            
        //     window.location.href = redirectUrl;

        // });
    }
}