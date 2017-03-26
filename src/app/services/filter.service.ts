import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/';
import { Observable} from 'rxjs';

import { CriteriaItem } from '../products/filter/criteria-item';
import { PriceFilterComponent } from '../products/filter/price-filter/price-filter.component';
import { IFilterCriteria } from '../model/filterCriteria.interface';
import { MockProducts } from '../data/mockProducts';
import { MockCategories } from '../data/mockCategories';
import { MockOptions } from '../data/mockOptions';
import { MockProductOptions } from '../data/mockProductOptions';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class FilterService{

    private apiUrl = '';
    filterCriterias: IFilterCriteria[] = [];
    private payLoad = new Subject<string[]>();
    payload$ = this.payLoad.asObservable();
    private payloadCategoryAdded = new Subject();
    payloadCategoryAdded$ = this.payloadCategoryAdded.asObservable();

    constructor(private http: Http,
                private config: ConfigSettings){
        this.apiUrl = this.config.apiUrl;
    }

    getFilterComponents(categoryId: number): IFilterCriteria[]{
        let products = MockProducts.filter(i => i.CategoryId == categoryId);
        let productOptions: any[] = [];
        MockProductOptions.map(item => {
            if(products.filter(p => p.id == item.ProductId).length > 0)
            {
                productOptions.push(item);
            }
        });
        let optionValues: any[] = [];
        MockOptions.map(item => {
             let productOptionsFiltered = productOptions.filter(o => o.OptionId == item.Id);
             if(productOptionsFiltered.length > 0)
             {
                 optionValues.push({
                     categoryId: productOptionsFiltered[0].CategoryId,
                     optionValue:  item
                 });
             }
        });

        optionValues.map(item => {
            this.filterCriterias.push({
                // CategoryId: item.categoryId,
                Option_Id: item.optionValue.Id,
                Option_Title: item.optionValue.OptionTitle,
                Option_Style: item.optionValue.OptionStyle,
                Option_Values: item.optionValue.OptionValues 
            });
         });
         return this.filterCriterias;

    }

    changeFilterValues(values: string[]){
        this.payLoad.next(values);
    }

    getCategoryName(categoryId: number): string{
        let category = MockCategories.filter(x => x.id === categoryId);
        if(category.length > 0)
        {
            return category[0].title;
        }
        return '';
    }

    addCategory(data: any): Observable<any>{
        let url = this.apiUrl + 'api/categories';
        console.log('url - ' + url);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
                return this.http.post(url,data, options)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    
    updateCategory(data: any): Observable<any>{
        let url = this.apiUrl + 'api/categories/' + data.id;
        console.log('url - ' + url);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
                return this.http.put(url,data, options)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }
    
    deleteCategory(data: any): Observable<any>{
        let url = this.apiUrl + 'api/categories/' + data.id;
        console.log('url - ' + url);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
                return this.http.delete(url, options)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    categoryAdded(){
        this.payloadCategoryAdded.next();
    }

    getCategories(): Observable<any>{
        let url = this.apiUrl + 'api/categories';
        return this.http.get(url)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);
    }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

}