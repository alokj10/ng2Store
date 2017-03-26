import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { OrderService } from '../services/order.service';
import { ViewOrdersComponent } from './orders/view-orders.component';
import { ViewProductsComponent } from './products/view-products.component';
import { ProductBasicInfoComponent } from './products/add-new/basic-info.component';
import { AddNewProductComponent } from './products/add-new/add-new-product.component';
import { AddFeatureComponent } from './products/add-new/add-feature.component';
import { AddSpecComponent } from './products/add-new/add-spec.component';
import { AddImageComponent } from './products/add-new/add-image.component';
import { AddCategoryComponent } from './categories/add-category.component';
import { ViewCategoriesComponent } from './categories/view-categories.component';
import { CategoryMainComponent } from './categories/category-main.component';
import { ViewFeaturesComponent } from './products/view-features.component';
import { ViewSpecComponent } from './products/view-spec.component';
import { FeatureMainComponent } from './products/add-new/feature-main.component';
import { SpecMainComponent } from './products/add-new/spec-main.component';
import { AdminAppComponent } from './admin-app.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

@NgModule({
    imports:    [
        SharedModule,
        AdminRoutingModule
    ],
    declarations:   [
        ViewOrdersComponent,
        ViewProductsComponent,
        ProductBasicInfoComponent,
        AddNewProductComponent,
        AddFeatureComponent,
        AddSpecComponent,
        AddImageComponent,
        AddCategoryComponent,
        ViewCategoriesComponent,
        CategoryMainComponent,
        ViewFeaturesComponent,
        ViewSpecComponent,
        FeatureMainComponent,
        SpecMainComponent,
        AdminAppComponent,
        FileSelectDirective
    ],
    providers: [ OrderService ]
})
export class AdminModule{
}