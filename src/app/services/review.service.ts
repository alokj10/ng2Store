import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable} from 'rxjs';
import { ConfigSettings } from './configSettings.service';

@Injectable()
export class ReviewService{
    private apiUrl: string = '';
    private reviews: any[];

    constructor(private http: Http,
                private config: ConfigSettings){
        this.apiUrl = this.config.apiUrl;
    }
    
    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        return Observable.throw(error.json().error || 'server error');
    }

    getReviewRating(productId: number){
        let url = this.apiUrl + 'api/reviews/' + productId;
        return this.http.get(url)
                        .map((res: Response) => res.json())
                        .catch(this.handleError);        
    }

    saveReviewRating(data: any): Observable<any>{
        data = JSON.stringify(data);
        console.log('review post - ' + data);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this.apiUrl + 'api/reviews', data, options)
                   .map((res: Response) => res.json())
                   .catch(this.handleError);
    }



}