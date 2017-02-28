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
    private _showLoginModal: boolean = false;

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
        return this._isLoggedIn;
    }

    set showLoginModal(showLoginModal: boolean){
        this._showLoginModal = showLoginModal;
    }

    get showLoginModal(): boolean{
        return this._showLoginModal;
    }

    openLoginModal(){
        this.showLoginModal = true;
    }

    closeLoginModal(){
        this.showLoginModal = false;
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