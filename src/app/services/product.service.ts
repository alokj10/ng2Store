import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { IProduct } from '../model/product.interface';
import { Observable} from 'rxjs';
import { MockProducts } from '../data/mockProducts';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class ProductService{

    private apiUrl = '';
    private cartItems: IProduct[] = [];

    constructor(private http: Http,
                private config: ConfigSettings){
        this.apiUrl = this.config.apiUrl;
    }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    getProducts(): Observable<IProduct[]>{
        let url = this.apiUrl + 'api/products';
        return this.http.get(url)
                   .map((res: Response) => res.json() as IProduct[])
                   .catch(this.handleError);
    }

    saveProduct(data: any): Observable<any>{
        data = JSON.stringify(data);
        console.log('post - ' + data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.apiUrl + 'api/products', data, options)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }

    getFeatures(productId: number){
        let url = this.apiUrl + 'api/features/' + productId;
        return this.http.get(url)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);        
    }

    saveProductFeature(data: any): Observable<any>{
        data = JSON.stringify(data);
        console.log('feature post - ' + data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.apiUrl + 'api/features', data, options)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }

    // getProduct(id: number){
    //     return Promise.resolve(this.getProducts()
    //                                .then(products => 
    //                                     products.find(product => product.Id === id)
    //                                     ));
    // }
    
    add_to_user_cart(product: IProduct){
        console.log("adding to cart - 1");
        if(!this.cartItems.find(x => x.Id == product.Id))
        {
            this.cartItems.push(product);
        }
        else{
            var curQty = this.cartItems.find(x => x.Id == product.Id).Quantity;
            this.cartItems.find(x => x.Id == product.Id).Quantity = curQty+1;
        }
    }

    remove_from_user_cart(product: IProduct){
        console.log("removing from  cart - 1");
        if(!this.cartItems.find(x => x.Id == product.Id))
        {
            console.log('item not in the cart');
        }
        else{
            this.cartItems.splice(this.cartItems.findIndex(x => x.Id == product.Id),1);
        }
    }
     
    get_products_from_user_cart(){
        console.log('items in cart - ' + this.cartItems.length);
        return Promise.resolve(this.cartItems);
    }

    getProductsByBrand(brandNames: string[]): IProduct[]{
        let filteredProducts: IProduct[] = [];
        if(brandNames.length === 0)
        {
            return MockProducts;
        }
        MockProducts.map(x => {
            let specs = x.Specifications.filter(i => i.Title === 'Brand');
            if(specs.length > 0)
            {
                let spec = specs[0];
                console.log('b1=' + spec.Description)
                if(brandNames.filter(b => b === spec.Description).length > 0)
                {
                    console.log('b2=' + spec.Description)
                    filteredProducts.push(x);
                }
            }
        });
        return filteredProducts;
    }
}