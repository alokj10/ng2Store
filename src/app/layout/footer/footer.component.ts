import { Component } from '@angular/core';
import { SiteInfoService } from '../../services/siteInfo.service';

@Component({
    selector: 'so-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent{

constructor(public siteInfoService: SiteInfoService){
    }
}