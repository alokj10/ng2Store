import { Injectable } from '@angular/core';

@Injectable()
export class SiteInfoService{
     header: any;
     constructor(){
         this.header = {
             brandName: 'Shopping Cart',
             tagLine: 'An Online Bazaar',
             email: 'info@shoppingcart.com',
             phone: '+44 205 205 306'
         }
     }
}