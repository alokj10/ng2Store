import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    template: `<div class="container">
            <div class="well">
                <h4>Redirecting...</h4>
            </div>
        </div>
    `
})
export class RedirectComponent implements OnInit{

    constructor(private route: ActivatedRoute,
                private router: Router){

    }

    ngOnInit(){
        // let redirectUrl = this.route.snapshot.queryParams['url'];
        
        //     let url = decodeURIComponent(redirectUrl);
        //     alert(url);
        //     window.location.href = redirectUrl;

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