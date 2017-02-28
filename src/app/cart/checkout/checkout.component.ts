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
        //   console.log('tabs count: ' + this.ctabs.tabs.length);
        // this.setTabActive(this.loginActive);
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

    //  ngAfterContentInit(){
    //     console.log('checkout constructor');
    //     this.AddTab(1, "Log In");
    //     this.AddTab(2, "Delivery Details");
    //     this.AddTab(3, "Order Summary");
    //     this.AddTab(4, "Payment Method");
    //     console.log('length: ' + this.ctabs.length);
    //  }

    // ngOnInit(){
        
    // }

    // AddTab(tId, tTitle){
    //     // this.tItem = {tabId: tId, tabTitle: tTitle};
    //     this.tItem = {active: false,title: tTitle};
    //     // this.tItem.tabId = tabId;
    //     // this.tItem.tabTitle = tabTitle;
    //     this.ctabs.push(this.tItem);
    // }

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
