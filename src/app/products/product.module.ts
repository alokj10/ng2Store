import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { ProductListComponent } from './product-list.component';
import { FilterAreaComponent } from './filter/filter-area.component';
import { CategoryFilterComponent } from './filter/category-filter.component';
import { ContentHostDirective } from '../directives/content-host.directive';
import { ProductService } from '../services/product.service';

@NgModule({
    imports:[
        LayoutModule
    ],
    declarations:[
        ProductListComponent,
        FilterAreaComponent,
        CategoryFilterComponent,
        ContentHostDirective
    ],
    entryComponents: [ CategoryFilterComponent ],
    providers: [ ProductService ]
})
export class ProductModule{

}