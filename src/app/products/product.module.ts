import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SecurityModule } from '../security/security.module';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product/prod_detail.component';
// import { ProductItemComponent } from './product/product-item.component';
import { FilterAreaComponent } from './filter/filter-area//filter-area.component';
import { CheckboxFilterComponent } from './filter/checkbox-filter/checkbox-filter.component';
import { ContentHostDirective } from '../directives/content-host.directive';
import { ProductService } from '../services/product.service';
import { FilterService } from '../services/filter.service';
import { LocationService } from '../services/location.service';
import { ViewCartComponent } from '../cart/view_cart.component';
import { AddReviewComponent } from './review/add-review.component';
import { RateProductComponent } from './review/rate-product.component';
import { ViewReviewsComponent } from './review/view-reviews.component';

import { AppRoutingModule } from '../app-routing.module';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryProductService }  from '../services/in-memory-product.service';

@NgModule({
    imports:[
        LayoutModule,
        CommonModule,
        AppRoutingModule,
        SharedModule,
        SecurityModule,
        // InMemoryWebApiModule.forRoot(InMemoryProductService)
    ],
    declarations:[
        ProductListComponent,
        // ProductItemComponent,
        ProductDetailComponent,
        AddReviewComponent,
        RateProductComponent,
        ViewReviewsComponent,
        FilterAreaComponent,
        CheckboxFilterComponent,
        ContentHostDirective
    ],
    entryComponents: [ CheckboxFilterComponent ],
    providers: [ ProductService, FilterService, LocationService ]
})
export class ProductModule{

}