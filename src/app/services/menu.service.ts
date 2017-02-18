import { Injectable } from '@angular/core';
import { ICategory } from '../model/category.interface';
import { MockCategories } from '../data/mockCategories';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService{
    
    private categoriesUrl = 'api/categories';
    private _allCategories: ICategory[];
    set allCategories(allCategories: ICategory[]){
        console.log('cat set');
        this._allCategories = allCategories;
    }
    get allCategories(): ICategory[]{
        return this._allCategories;
    }

    constructor(private http: Http){
    }

    private handleError(error: any): Promise<any>{
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getLevel1MenuItems(): Promise<ICategory[]>{
        // let level1Categories = this.allCategories.filter(item => item.ParentId==0);
        // return level1Categories;

        return this.http.get('api/categories')
                   .toPromise()
                   .then(response => 
                        response.json().data as ICategory[]
                   )
                   .catch(this.handleError);
    }


}