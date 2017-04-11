import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(private http: Http){

    }

    createAuthorizationHeader(headers: Headers) {
        var token = localStorage.getItem('token');
        console.log('token - ' + token);
        if(token){
            console.log('token - 1 - ' + token);
            headers.append('Authorization', token);
        }
        console.log('headers - ' + headers['Authorization']);
    }

    get(url: string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
        headers: headers
        });
    }

    post(url: string, data: any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, data, {
        headers: headers
        });
    }
}
