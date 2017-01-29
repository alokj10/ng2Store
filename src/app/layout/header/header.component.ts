import { Component } from '@angular/core';
import { SiteInfoService } from '../../services/siteInfo.service';

@Component({
    selector: 'so-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent{
    siteInfo: SiteInfoService;

    constructor(public siteInfoService: SiteInfoService){
        //this.siteInfo = siteInfoService;
        // this.brandName = siteInfoService.header.brandName;    
        // this.email = siteInfoService.header.email;
        // this.phone = siteInfoService.header.phone;
    }
}