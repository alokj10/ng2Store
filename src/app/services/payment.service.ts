import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';

import { ConfigSettings } from './configSettings.service';
import { HttpClient } from './httpClient.service';

@Injectable()
export class PaymentService {
    private apiUrl: string = '';
    constructor(private http: HttpClient,
                private config: ConfigSettings){
                    this.apiUrl = config.apiUrl;
                }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    payWithPaypal(data: any): Observable<any> {
        let url = this.apiUrl + 'api/payment/paypal/pay';
        return this.http.post(url, data)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

    // callPaymentResult(url: string): Observable<any> {
        // return this.http.post(url)
        //             .map((res: Response) => res.json())
        //             .catch(this.handleError);
    // }

    createPayment(data: any): Observable<any> {
        let url = this.apiUrl + 'api/payment/paypal/pay/';
        return this.http.post(url, data)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }
    
    executePayment(data: any): Observable<any> {
        let url = this.apiUrl + 'api/payment/paypal/execute';
        return this.http.post(url, data)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }
}