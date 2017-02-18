import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
 
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
  
  get IsLoggedIn(){
        if (localStorage.getItem("user") === null){
                return false;
        }  
    return true;
  }

  constructor(
    private router: Router){}
 
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
 
  login(user: User){
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user",JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
 
  }
 
   checkCredentials(){
    if (localStorage.getItem("user") === null){
        console.log('Not Logged In');
        this.router.navigate(['login']);
    }
    else
    {
        console.log('Logged In');
    }
  } 
}