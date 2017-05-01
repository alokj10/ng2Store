import { Component } from '@angular/core';
import { SiteInfoService } from '../../services/siteInfo.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'so-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    siteInfo: SiteInfoService;
    _isLoggedIn: boolean;
    private _showModal: boolean = false;
    private showLoginModal: boolean = false;
    private showSignupModal: boolean = false;

    constructor(public siteInfoService: SiteInfoService,
    private authenticationService: AuthenticationService){
        this.isLoggedIn = this.authenticationService.IsLoggedIn;
        //this.siteInfo = siteInfoService;
        // this.brandName = siteInfoService.header.brandName;    
        // this.email = siteInfoService.header.email;
        // this.phone = siteInfoService.header.phone;
    }

    set isLoggedIn(isLoggedIn: boolean){
        this._isLoggedIn = isLoggedIn;
    }

    get isLoggedIn(): boolean{
        return this.authenticationService.IsLoggedIn;
    }

    set showModal(showModal: boolean){
        this._showModal = showModal;
    }

    get showModal(): boolean{
        return this._showModal;
    }

    openModal(modalName: string){
        this.showModal = true;
        if(modalName === 'signup'){
            this.showSignupModal = true;
            this.showLoginModal = false;
        }
        else{
            this.showSignupModal = false;
            this.showLoginModal = true;
        }
    }

    closeLoginModal(){
        this.showModal = false;
    }
    
    onLogin(loginSuccess: boolean){
        this.closeLoginModal();
        this.isLoggedIn = this.authenticationService.IsLoggedIn;
    }

    logout(){
        this.authenticationService.logout();
        this.isLoggedIn = this.authenticationService.IsLoggedIn;
    }
}