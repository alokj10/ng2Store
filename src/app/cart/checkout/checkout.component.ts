import { Component, OnInit, AfterContentInit } from '@angular/core';
import { TabsComponent } from '../../shared/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab.component';
import { LoginComponent } from '../../security/login/login.component';
import { DeliveryAddressComponent } from './delivery_address.component';
import { OrderSummaryComponent } from './order_summary.component';
import { PaymentMethodComponent } from './payment_method.component';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit{
    ctabs: TabComponent[] = [];
    private tItem: TabComponent;

    constructor(private authenticationService: AuthenticationService){
        this.setTabActive('login');
     }

     ngOnInit(){
         if(this.authenticationService.IsLoggedIn)
         {
             this.setTabActive('delivery');
         }
         else{
             this.setTabActive('login');
         }
     }

     loginActive: boolean;
     deliveryActive: boolean;
     orderActive: boolean;
     paymentActive: boolean;


    setTabActive(tab: string){
        this.loginActive = false;
        this.deliveryActive = false;
        this.orderActive = false;
        this.paymentActive = false;

        if(tab === 'login')
        {
            this.loginActive = true;
        }
        else if(tab === 'delivery')
        {
            this.deliveryActive = true;
        }
        else if(tab === 'order')
        {
            this.orderActive = true;
        }
        else if(tab === 'payment')
        {
            this.paymentActive = true;
        }
        
        console.log('delivery: ' + this.deliveryActive);
    }

    onLogin(loginSuccess: boolean){
        this.setTabActive('delivery');
    }

    onSaveDeliveryAddress(){
        console.log('del called');
        this.setTabActive('order');
    }

    onSaveOrder(){
        this.setTabActive('payment');
    }

    onSavePayment(){
        
    }
}
