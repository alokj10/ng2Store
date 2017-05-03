import { Component, ElementRef, OnInit, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

// import 'checkout.js'; 

import { PaymentService } from '../../services/payment.service';

declare var paypal: any;

@Component({
    selector: 'so-payment-method',
    templateUrl: './payment_method.component.html'
})
export class PaymentMethodComponent implements OnInit, OnDestroy, AfterViewInit{
    @Input() productsToPayFor: any[];
    @Input() order_amount: number;
    @Input() shipping_amount: number;
    private shipping_address: any;

    private socket: any;
    private connection: any;
    private msgs: any[];
    private message: any;
    socketUpdate: string = 'nothing to update';

    constructor(private paymentService: PaymentService,
    private router: Router,
    private elementRef: ElementRef){
        this.message = 'update form port 8080';
        this.msgs = [];
        /*socket code */
        // this.socket = io('http://localhost:9000');
        // this.socket.on('update1', function(data: any){
        //     this.socketUpdate = data;
        // }.bind(this));
    }   

    ngAfterViewInit() {
        // var s = document.createElement("script");
        // s.type = 'text/javascript';
        //s.src = 'https://www.paypalobjects.com/api/checkout.js';
        // s.setAttribute("data-version-4","");
        // s.innerHTML = this.renderPaypalButtonByJs();
        // this.elementRef.nativeElement.appendChild(s);
        this.renderByTs(this);
    }

    ngOnInit() {
        /*socket code */
        // this.connection = this.getMessages().subscribe(message => {
        //     this.msgs.push(message);
        // })

        
    }

    setShippingAddress(address: any) {
        this.shipping_address = address;
        console.log('addr id  - ', this.shipping_address.id);
    }

    renderByTs(obj: any) {
        var ctl = document.getElementById("myPay");
        let data: any = {};
        data.items_list = obj.productsToPayFor;
        data.order_amount = obj.order_amount;
        data.shipping_amount = obj.shipping_amount;

        console.log('addr id  - ', obj.shipping_address);
        console.log('amt - ' + data.order_amount);

        paypal.Button.render({
            env: 'sandbox',
            payment: function(resolve: any, reject: any) {
                obj.paymentService.createPayment(data)
                    .subscribe((res: any) => {
                        console.log('payment id - ' + res.paymentID);
                        resolve(res.paymentID);
                        // obj.router.navigate(['/redirect',{ purpose: 'placeorder' }]);
                    },
                    (err: any) => {
                        console.log('error occured - ' + err);
                        reject(err);
                    });
            },
            onAuthorize: function(data: any, actions: any) {
                console.log('The payment was authorized!');
                console.log('Payment ID = ',   data.paymentID);
                console.log('PayerID = ', data.payerID);
                console.log('pay details returned from paypal = ', data);
                let execData: any = {};
                execData.paymentID = data.paymentID;
                execData.payerID = data.payerID;
                execData.shippingAddressId = obj.shipping_address.id;
                
                
                obj.paymentService.executePayment(execData)
                    .subscribe((res: any) => {
                        if(res.status === 'success') {
                            console.log('success payment execute orderid - ' + res.order.id);
                            obj.router.navigate(['/payment_result',{ purpose: 'placeorder', orderId: res.order.id }]);
                        }
                    },
                    (err: any) => {
                        console.log('fail payment execute');
                    });
                    
            },
            onCancel: function(data: any) {
                console.log('payment was cancelled');
            }
        }, ctl);
    }

    renderPaypalButtonByJs() {
        let data: any = {};
        data.items_list = this.productsToPayFor;
        data.order_amount = this.order_amount;
        data.shipping_amount = this.shipping_amount;

       return `paypal.Button.render( {
            env: 'sandbox',

            payment: function(resolve, reject) {
                
                $.ajax({url: 'http://localhost:9000/api/payment/paypal/pay/',
                    type:"POST",
                    beforeSend: function(request) {
                        request.setRequestHeader('Authorization',localStorage.getItem('token'));
                    },
                    data: ` + data + `
                    success: function(data) { alert(data.paymentID);resolve(data.paymentID);  },
                    error:   function(err)  { reject(err);  }
                    });
                    
            },

            onAuthorize: function(data, actions) {
                console.log('The payment was authorized!');
                console.log('Payment ID = ',   data.paymentID);
                console.log('PayerID = ', data.payerID);

                $.ajax({url: 'http://localhost:9000/api/payment/paypal/execute',
                    type:"POST",
                    beforeSend: function(request) {
                        request.setRequestHeader('Authorization',localStorage.getItem('token'));
                    },
                    data: "{ paymentID: data.paymentID, payerID: data.payerID }",
                    success: function(data) { console.log('success payment execute'); },
                    error:   function(err)  { console.log('fail payment execute');  }
                    });
                    
            },

            onCancel: function(data) {
                console.log('payment was cancelled');
            }
        }, '#myPay');
        `;
    }

    ngOnDestroy() {
        //this.connection.unsubscribe();
    }

    getMessages(): Observable<any>{
        let observable = new Observable((observer: any) => {
            this.socket = io('http://localhost:9000');
            this.socket.on('message', (data: any) => {
                observer.next(data);
            });

            return () => {
                this.socket.disconnect();
            };
        })
        return observable;
    } 

    payWithPaypal(){
        console.log('sending msg ' + this.message);
        this.socket.emit('add-message', this.message);
        this.message = '';
        



        // let data: any = {};
        // data.items_list = this.productsToPayFor;
        // data.order_amount = this.order_amount;
        // data.shipping_amount = this.shipping_amount;

        // this.paymentService.payWithPaypal(data)
        //     .subscribe(res => {
        //         console.log('payment result: ' + res);
        //         console.log(res.redirectUrl);
        //         let url = decodeURIComponent(res.redirectUrl);
        //         console.log(url);
        //         this.router.navigate(['/redirect/?url=' + url]);
        //     });
    }
}