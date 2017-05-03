import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Response } from '@angular/http';

import { HttpClient } from './httpClient.service';
import { IProduct } from '../model/product.interface';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class CartService{
    public isCartVisible: boolean = true;
    private cartItems: any[] = [];
    private payload = new Subject<IProduct>();
    private payloadTotal = new Subject<number>();
    private payloadShippingTotal = new Subject<number>();
    private apiUrl = '';
    
    payload$ = this.payload.asObservable();
    payloadTotal$ = this.payloadTotal.asObservable();
    payloadShippingTotal$ = this.payloadShippingTotal.asObservable();
    totalAmount: number;
    shippingCharges: number;

    constructor(private http: HttpClient, 
                private config: ConfigSettings){
            this.totalAmount = 0;
            this.apiUrl = this.config.apiUrl;
    }
    
    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    public add_to_cart(product: IProduct){
        console.log('product added to cart: ' + product.Name);
        this.payload.next(product);
        // this.updateTotal();
    }

    updateTotal(amount: number){
        console.log('cart total amount - ' + amount);
        this.totalAmount = amount;
        // this.payloadTotal.next(this.totalAmount,this.shippingCharges);
    }

    updateShippingCharges(amount: number){
        this.shippingCharges = amount;
    }

    recalculateTotals(){
        let total = 0;
        let shippingChargesTotal = 0;
        // this.items = 0;
        this.cartItems.forEach(product => {
            if(!product.quantity){
                product.quantity = 1;
            }
            total += product.sell_price * product.quantity;
            shippingChargesTotal += product.shippingCharge;
            // this.items++; 
            this.totalAmount = total;
            this.shippingCharges = shippingChargesTotal;
            // this.payloadTotal.next(this.totalAmount);
            // this.payloadShippingTotal.next(this.shippingCharges);
            // this.cartService.updateTotal(this.total);
            // this.cartService.updateShippingCharges(this.shippingChargesTotal);
        })
    }

    loadCartItems(products: any[]){
        if(this.cartItems && this.cartItems.length > 0)
        {
            return;
        }
        products.forEach(item => {
            this.cartItems.push(item);
        })
    }
    
    add_to_user_cart(data: any): Observable<any>{
        console.log("adding to cart - 1");
        if(!this.cartItems.find(x => x.id == data.id))
        {
            // this.cartItems.push(data);
            console.log('post - ' + data);

            return this.http.post(this.apiUrl + 'api/cart', data)
                    .map((res: Response) => res.json())
                    .catch(this.handleError);
        }
        else{
            var curQty = this.cartItems.find(x => x.id == data.id).quantity;
            this.cartItems.find(x => x.id == data.id).quantity = curQty+1;
        }
    }
    
    remove_from_user_cart(uc_id: number): Observable<any>{
        console.log("removing from  cart - 1");
        // if(!this.cartItems.find(x => x.id == product.id))
        // {
        //     console.log('item not in the cart');
        // }
        // else{
            // this.cartItems.splice(this.cartItems.findIndex(x => x.id == product.id),1);
            return this.http.delete(this.apiUrl + 'api/cart/' + uc_id)
                            .map((res: Response) => res.json())
                            .catch(this.handleError);
        // }
    }
          
    get_products_from_user_cart(){
        
        let url = this.apiUrl + 'api/cart/my';
        console.log('cart items for user - ' + url);
        return this.http.get(url)
                        .map((res: Response) => {
                            this.cartItems = res.json();
                            return res.json();
                        })
                        .catch(this.handleError);
    }

}