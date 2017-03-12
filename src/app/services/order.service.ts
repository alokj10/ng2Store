import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { IOrder } from  '../model/order.interface';

@Injectable()
export class OrderService{
    private apiUrl: string = 'api/orders';
    private orders: IOrder[];

    constructor(private http: Http){

    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getOrders(): Promise<IOrder[]>{
                return this.http.get(this.apiUrl)
                   .toPromise()
                   .then(response => response.json().data as IOrder[])
                   .catch(this.handleError);
    }

    // getOrderById(id: number): IOrder{
    //   return this.getOrders().then(orders => orders.find(order => order.Id === id));

    // }

}