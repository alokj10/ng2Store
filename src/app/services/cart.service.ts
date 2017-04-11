import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IProduct } from '../model/product.interface';

@Injectable()
export class CartService{
    public isCartVisible: boolean = true;
    private payload = new Subject<IProduct>();
    payload$ = this.payload.asObservable();
    totalAmount: number;
    shippingCharges: number;

    constructor(){ }
    
    public add_to_cart(product: IProduct){
        console.log('product added to cart: ' + product.Name);
        this.payload.next(product);
    }

    updateTotal(amount: number){
        this.totalAmount = amount;
    }

    updateShippingCharges(amount: number){
        this.shippingCharges = amount;
    }
}