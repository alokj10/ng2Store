import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../services/authentication.service';

@Component({
    selector: 'so-login',
    templateUrl: './login.component.html',
})
export class LoginComponent{
    @Input() redirectUrl: string;
    @Output() onLogin = new EventEmitter<boolean>();
    public user = new User('','');
    public errorMsg = '';
 

    constructor(private router: Router,
                private authenticationService: AuthenticationService){
        console.log('redirect url constructor: ' + this.redirectUrl);
        if(this.redirectUrl == undefined)
        {
            this.redirectUrl = '/dashboard';
        }
    }

    login(){
        if(this.authenticationService.login(this.user)){
            console.log('redirect url login success: ' + this.redirectUrl);
            if(this.redirectUrl == 'deliveryAddress')
            {
                this.onLogin.emit(true);
            }
            else
            {
                this.onLogin.emit(true);
                this.router.navigate(['' + this.redirectUrl + '']);
            }
        }
        else
        {
            this.errorMsg = 'Failed to login';
        }
    }
}