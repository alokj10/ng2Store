import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from '../security/security.module';
import { ProductListComponent } from './product-list.component';
import { ProductItemComponent } from './product/product-item.component';
import { FilterAreaComponent } from './filter/filter-area//filter-area.component';
import { CheckboxFilterComponent } from './filter/checkbox-filter/checkbox-filter.component';
import { ContentHostDirective } from '../directives/content-host.directive';
import { ProductService } from '../services/product.service';
import { FilterService } from '../services/filter.service';
import { ViewCartComponent } from '../cart/view_cart.component';
import { AppRoutingModule } from '../app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeliveryAddressComponent } from './checkout/delivery_address.component';
import { OrderSummaryComponent } from './checkout/order_summary.component';
import { PaymentMethodComponent } from './checkout/payment_method.component';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryProductService }  from '../services/in-memory-product.service';

@NgModule({
    imports:[
        LayoutModule,
        CommonModule,
        AppRoutingModule,
        SharedModule,
        SecurityModule
        // InMemoryWebApiModule.forRoot(InMemoryProductService)
    ],
    declarations:[
        ProductListComponent,
        ProductItemComponent,
        FilterAreaComponent,
        CheckboxFilterComponent,
        ContentHostDirective,
        ViewCartComponent,
        CheckoutComponent,
        DeliveryAddressComponent,
        OrderSummaryComponent,
        PaymentMethodComponent
    ],
    entryComponents: [ CheckboxFilterComponent ],
    providers: [ ProductService, FilterService ]
})
export class ProductModule{

}