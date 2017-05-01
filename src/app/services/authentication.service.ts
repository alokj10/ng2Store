import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { Observable} from 'rxjs';
import { ConfigSettings } from './configSettings.service';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService {
  
    private apiUrl = '';
  
    constructor(private http: Http,
                private config: ConfigSettings,
                private router: Router){
        this.apiUrl = this.config.apiUrl;
    }

    private handleError(error: any): Observable<any>{
        console.error('An error occurred', error);
        if(error.status === 401){
          this.router.navigate(['login']);
        }
        return Observable.throw(error.json().error || 'server error');
    }

    login(user: any) : Observable<boolean>{
        user = JSON.stringify(user);
        console.log('login post - ' + user);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = this.apiUrl + 'auth/local';
        console.log('url - ' + url);
        return this.http.post(url, user, options)
                   .map((res: Response) => {
                      let currentUser = res.json();
                      if(currentUser && currentUser.token) {
                        localStorage.setItem('currentUser', JSON.stringify(currentUser));
                        localStorage.setItem('token', currentUser.token);
                        return true;
                      }
                      else{
                        return false;
                      }
                   })
                   .catch(this.handleError);
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('token');
        console.log('logged out successfully');
        this.router.navigate(['products']);
    }

   get IsLoggedIn(){
      if (localStorage.getItem("currentUser") === null){
              return false;
      }  
      return true;
   }

   signup(user: any): Observable<any>{
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      let url = this.apiUrl + 'api/users/signup';
      return this.http.post(url, user, options)
               .map((res: Response) =>  res.json())
               .catch(this.handleError);
   } 
}