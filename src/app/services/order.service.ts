import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable} from 'rxjs';

import { IOrder } from  '../model/order.interface';
import { ConfigSettings } from './configSettings.service';
import { HttpClient } from './httpClient.service';

@Injectable()
export class OrderService{
    private apiUrl: string ;
    private orders: IOrder[];

    constructor(private http: HttpClient,
                private config: ConfigSettings){
                    this.apiUrl = config.apiUrl;
                }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    getPendingOrders(): Observable<any[]>{
        let url = this.apiUrl + 'api/orders/pending';
        return this.http.get(url)
            .map((res: Response) => res.json())
            .catch(this.handleError);
    }

    getOrderById(orderId: number): Observable<any>{
      let url = this.apiUrl + 'api/orders/' + orderId;
      return this.http.get(url)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
    }

}