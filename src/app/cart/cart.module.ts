import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { SecurityModule } from '../security/security.module';
import { ViewCartComponent } from './view_cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryAddressComponent } from './checkout/delivery_address.component';
import { ConfirmOrderComponent } from './checkout/confirm_order.component';
import { OrderSummaryComponent } from './checkout/order_summary.component';
import { PaymentMethodComponent } from './checkout/payment_method.component';
import { PaymentResultComponent } from './checkout/payment_result.component';

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
        ConfirmOrderComponent,
        OrderSummaryComponent,
        PaymentMethodComponent,
        PaymentResultComponent
    ]
})
export class CartModule{

}