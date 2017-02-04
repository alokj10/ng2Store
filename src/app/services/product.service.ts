import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { IProduct } from '../model/product.interface';

@Injectable()
export class ProductService{

    private apiUrl = 'api/products';
    constructor(private http: Http){
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getProducts(): Promise<IProduct[]>{
        return this.http.get(this.apiUrl)
                   .toPromise()
                   .then(response => response.json().data as IProduct[])
                   .catch(this.handleError);
    }
}