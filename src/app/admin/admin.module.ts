import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AdminRoutingModule } from './admin.routing.module';
import { OrderService } from '../services/order.service';
import { ViewOrdersComponent } from './orders/view-orders.component';
import { ViewProductsComponent } from './products/view-products.component';
import { ProductBasicInfoComponent } from './products/add-new/basic-info.component';
import { AddNewProductComponent } from './products/add-new/add-new-product.component';
import { AddFeatureComponent } from './products/add-new/add-feature.component';
import { AddImageComponent } from './products/add-new/add-image.component';
import { AddCategoryComponent } from './categories/add-category.component';
import { ViewCategoriesComponent } from './categories/view-categories.component';
import { CategoryMainComponent } from './categories/category-main.component';

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
        AddImageComponent,
        AddCategoryComponent,
        ViewCategoriesComponent,
        CategoryMainComponent
    ],
    providers: [ OrderService ]
})
export class AdminModule{
}