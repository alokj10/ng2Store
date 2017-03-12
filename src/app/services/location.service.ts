import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response  } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { IProduct } from '../model/product.interface';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class LocationService{
    
    constructor(private http: Http,
                private config: ConfigSettings){

    }

    addLocation(): Observable<any[]>{
        var obj = {
            name: 'Nasik',
            isActive: 1
        }
    //     let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });
        let apiUrl = this.config.apiUrl + 'api/locations';
        // console.log(JSON.stringify(obj));
        return this.http.post(apiUrl, obj)
        // return this.http.get(apiUrl)
                 .map(this.extractData)
                 .catch(this.handleError);

    }

    getLocation(id: number){
        return Promise.resolve(this.addLocation()
                                   .subscribe(products => 
                                        products.find(product => product.Id === id)
                                        ));
    }
    
    private extractData(res: Response) {
        let body = res.json();
        console.log('response - ' + body[0].name);
        return body || { };
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        console.log('error occured - ' + error);
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
         return Observable.throw(errMsg);
    }
}