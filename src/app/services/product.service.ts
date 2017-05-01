import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { IProduct } from '../model/product.interface';
import { Observable} from 'rxjs';
import { MockProducts } from '../data/mockProducts';
import { ConfigSettings } from './configSettings.service';
import { HttpClient } from './httpClient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class ProductService{

    private apiUrl = '';
    // private cartItems: IProduct[] = [];

    constructor(private http: Http, private httpClient: HttpClient,
                private config: ConfigSettings,
                private router: Router,private route: ActivatedRoute
                     ){
       this.apiUrl = this.config.apiUrl;
    }

    private handleError(obj: any, error: any): Observable<any>{
        console.error('An error occurred', error);
        if(error.status === 401){
           obj.router.navigate(['/login']);
        }
        return Observable.throw(error.json().error || 'server error');
    }

    getProducts(): Observable<IProduct[]>{
        let url = this.apiUrl + 'api/products/active';
        return this.httpClient.get(url)
                   .map((res: Response) => res.json() as IProduct[])
                   .catch(e => this.handleError(this, e));
    }

    getAllProducts(): Observable<IProduct[]>{
        let url = this.apiUrl + 'api/products';
        return this.httpClient.get(url)
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

    getSpecifications(productId: number){
        let url = this.apiUrl + 'api/specs/' + productId;
        return this.http.get(url)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);        
    }

    saveProductSpec(data: any): Observable<any>{
        data = JSON.stringify(data);
        console.log('spec post - ' + data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.apiUrl + 'api/specs', data, options)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }
    
    getProduct(productId: number){
          let url = this.apiUrl + 'api/products/' + productId;
            return this.httpClient.get(url)
                            .map((res: Response) => res.json())
                            .catch(e => this.handleError(this,e));
    }

    getProductByCategory(categoryId: number){
          let url = this.apiUrl + 'api/products/category/' + categoryId;
            return this.http.get(url)
                            .map((res: Response) => res.json())
                            .catch(this.handleError);
    }
    
    // add_to_user_cart(product: IProduct){
    //     console.log("adding to cart - 1");
    //     if(!this.cartItems.find(x => x.id == product.id))
    //     {
    //         this.cartItems.push(product);
    //     }
    //     else{
    //         var curQty = this.cartItems.find(x => x.id == product.id).quantity;
    //         this.cartItems.find(x => x.id == product.id).quantity = curQty+1;
    //     }
    // }

    // remove_from_user_cart(product: IProduct){
    //     console.log("removing from  cart - 1");
    //     if(!this.cartItems.find(x => x.id == product.id))
    //     {
    //         console.log('item not in the cart');
    //     }
    //     else{
    //         this.cartItems.splice(this.cartItems.findIndex(x => x.id == product.id),1);
    //     }
    // }
     
    // get_products_from_user_cart(){
    //     console.log('items in cart - ' + this.cartItems.length);
    //     return Promise.resolve(this.cartItems);
    // }

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