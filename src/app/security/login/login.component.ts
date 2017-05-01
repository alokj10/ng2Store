import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../services/authentication.service';

@Component({
    selector: 'so-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
    @Input() redirectUrl: string;
    @Input() buttonText: string;
    @Output() onLogin = new EventEmitter<boolean>();
    public errorMsg = '';
    private user: any;

    constructor(private router: Router, private route: ActivatedRoute,
                private authenticationService: AuthenticationService){
        console.log('redirect url constructor: ' + this.redirectUrl);
        this.user = {};
        this.buttonText = 'Login';
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            this.redirectUrl = params['redirectUrl'] || '';
        });
    }

    submitCredentials(){
        this.authenticationService.login(this.user)
            .subscribe(res => 
                {
                    console.log('redirect url login success: ' + this.redirectUrl);
                    if(res === true){
                        if(this.buttonText.indexOf('continue') === -1)
                        {
                            console.log('redirecting to products');
                            this.router.navigate(['products']);
                            this.onLogin.emit(true);
                        }
                        else{
                            this.onLogin.emit(true);
                        }
                    }
                    else
                    {
                        this.errorMsg = 'Failed to login';
                    }
            });
    }
}