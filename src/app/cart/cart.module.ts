import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { SecurityModule } from '../security/security.module';
import { ViewCartComponent } from './view_cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryAddressComponent } from './checkout/delivery_address.component';
import { OrderSummaryComponent } from './checkout/order_summary.component';
import { PaymentMethodComponent } from './checkout/payment_method.component';

@NgModule({
    imports:    [
        SharedModule,
        AppRoutingModule,
        SecurityModule
    ],
    declarations:   [
        ViewCartComponent,
        CheckoutComponent,
        DeliveryAddressComponent,
        OrderSummaryComponent,
        PaymentMethodComponent
    ]
})
export class CartModule{

}