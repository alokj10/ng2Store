import { Component, OnInit, AfterContentInit, ViewChild } from '@angular/core';

import { TabsComponent } from '../../shared/tabs/tabs.component';
import { TabComponent } from '../../shared/tabs/tab.component';
import { LoginComponent } from '../../security/login/login.component';
import { DeliveryAddressComponent } from './delivery_address.component';
import { OrderSummaryComponent } from './order_summary.component';
import { PaymentMethodComponent } from './payment_method.component';
import { AuthenticationService } from '../../services/authentication.service';
import { CartService } from '../../services/cart.service';

@Component({
    templateUrl: './checkout.component.html',
})
export class CheckoutComponent implements OnInit{
    ctabs: TabComponent[] = [];
    private tItem: TabComponent;
    productsToPayFor: any[];
    @ViewChild(OrderSummaryComponent)orderSummaryComponent: OrderSummaryComponent;

    constructor(private authenticationService: AuthenticationService,
                private cartService: CartService){
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
     private _deliveryActive: boolean;
     set deliveryActive(delActive: boolean)
     {
         this._deliveryActive = delActive;
     }
     get deliveryActive(): boolean{
         return this._deliveryActive;
     }
     
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
            console.log('activate shipping - ' + this.deliveryActive);
            this.deliveryActive = true;
            console.log('activate shipping - ' + this.deliveryActive);
             this.cartService.recalculateTotals();
             this.totalAmount = this.cartService.totalAmount;
        }
        else if(tab === 'order')
        {
            this.orderActive = true;
        }
        else if(tab === 'payment')
        {
            this.paymentActive = true;
        }
        
        console.log('selected tab: ' + tab);
    }

    onLogin(loginSuccess: boolean){
        if(loginSuccess){
            this.setTabActive('delivery');
        }
    }

    onSaveDeliveryAddress(shippingAddress: any){
        console.log('del called');
        this.setTabActive('order');
    }

    onConfirmOrder(products: any[]){
        this.productsToPayFor = products;
        this.setTabActive('payment');
    }

    onRemoveProduct(product: any){
        this.cartService.recalculateTotals();
        this.totalAmount = this.cartService.totalAmount;
        this.orderSummaryComponent.populateOrderItems_Total(this.totalAmount);
    }

    onSavePayment(){
        
    }

    private _totalAmount: number;
    set totalAmount(totAmount: number){
        this._totalAmount = totAmount;
    }
    get totalAmount(){
        return this._totalAmount;
    }

    get shippingCharge(){
        return this.cartService.shippingCharges;
    }
}
