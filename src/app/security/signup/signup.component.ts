import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'so-signup',
    templateUrl: './signup.component.html',
    styles: [`
    .ng-valid[required], .ng-valid.required  {
    border-left: 5px solid #42A948; /* green */
    }
    .ng-invalid:not(form)  {
    border-left: 5px solid #a94442; /* red */
    }
    `]
})
export class SignupComponent{
    public errorMsg = '';
    private user: any;
    private signedup: boolean = false;

    constructor(private router: Router,
                private authenticationService: AuthenticationService){
        this.user = {};
        this.signedup = false;
        this.errorMsg = '';
    }

    submitCredentials(){
        this.validateInputs();
        console.log('error - ' + this.errorMsg);
        if(this.errorMsg === ''){
            this.authenticationService.signup(this.user)
                .subscribe(res => 
                    {
                        console.log('result - ' + res.user_id);
                        this.signedup = true;
                    },
                    err => {
                        this.errorMsg = err;
                    });
        }
    }

    validateInputs(){
        console.log('email - ' + this.user.email);
        if(!this.user.password || this.user.password === ''){
            this.errorMsg = 'Password cannot be empty';
            return;
        }
        if(!this.user.confirm_password || this.user.confirm_password === ''){
            this.errorMsg = 'Please confirm your password';
            return;
        }
        if(!this.user.email || this.user.email === ''){
            this.errorMsg = 'Email Id cannot be empty';
            return;
        }
        if(this.user.password != this.user.confirm_password){
            this.errorMsg = 'Both passwords do not match';
            return;
        }
        var regexp = new RegExp('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$');
        if(!regexp.test(this.user.email)){
            this.errorMsg = 'Please enter valid email id';
            return;
        }
    }
}