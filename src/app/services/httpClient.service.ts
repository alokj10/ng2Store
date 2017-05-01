import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(private http: Http){

    }

    createAuthorizationHeader(headers: Headers) {
        var token = localStorage.getItem('token');
        console.log('token - ' + token);
        if(token){
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', token);
        }
    }

    get(url: string) {

        // var token = localStorage.getItem('token');
        // let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': token });
        
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        this.createAuthorizationHeader(headers);
        console.log('client get url - ' + url);
        return this.http.get(url, options);
    }

    post(url: string, data: any) {
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        this.createAuthorizationHeader(headers);
        console.log('client post data - ' + data);
        return this.http.post(url, data, options);
    }

    delete(url: string) {
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        this.createAuthorizationHeader(headers);
        console.log('client delete url - ' + url);
        return this.http.delete(url, options);
    }
}
