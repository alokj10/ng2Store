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
    @Input() buttonText: string;
    @Output() onLogin = new EventEmitter<boolean>();
    // public user = new User('','');
    public errorMsg = '';
    private user: any;
 

    constructor(private router: Router,
                private authenticationService: AuthenticationService){
        console.log('redirect url constructor: ' + this.redirectUrl);
        this.user = {};
        this.buttonText = 'Login';
        if(this.redirectUrl == undefined)
        {
            this.redirectUrl = '/dashboard';
        }
    }

    submitCredentials(){
        this.authenticationService.login(this.user)
            .subscribe(res => 
                {
                    console.log('redirect url login success: ' + this.redirectUrl);
                    if(res === true){
                            this.onLogin.emit(true);
                            // this.router.navigate(['' + this.redirectUrl + '']);
                        
                    }
                    else
                    {
                        this.errorMsg = 'Failed to login';
                    }
            });
    }
}