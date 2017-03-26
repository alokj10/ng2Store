import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { ICategory } from '../model/category.interface';
import { MockCategories } from '../data/mockCategories';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class MenuService{
    
    private apiUrl = '';
    private _allCategories: ICategory[];
    set allCategories(allCategories: ICategory[]){
        console.log('cat set');
        this._allCategories = allCategories;
    }
    get allCategories(): ICategory[]{
        return this._allCategories;
    }

    constructor(private http: Http,
                private config: ConfigSettings){
        this.apiUrl = this.config.apiUrl;
    }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    getAllCategories(): Observable<ICategory[]>{
        // let level1Categories = this.allCategories.filter(item => item.ParentId==0);
        // return level1Categories;
        let url = this.apiUrl + 'api/categories';

        return this.http.get(url)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }


}