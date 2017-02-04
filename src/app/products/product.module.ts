import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';
import { CommonModule } from '@angular/common';
// import { HttpModule } from '@angular/http';
import { ProductListComponent } from './product-list.component';
import { FilterAreaComponent } from './filter/filter-area//filter-area.component';
import { CategoryFilterComponent } from './filter/category-filter/category-filter.component';
import { ContentHostDirective } from '../directives/content-host.directive';
import { ProductService } from '../services/product.service';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryProductService }  from '../services/in-memory-product.service';

@NgModule({
    imports:[
        LayoutModule,
        CommonModule
        // HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryProductService)
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