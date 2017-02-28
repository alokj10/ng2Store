import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductItemComponent } from '../products/product/product-item.component';

@NgModule({
    imports:[
        CommonModule,
        FormsModule
    ],
    declarations:[
        ModalComponent,
        ProductItemComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        ModalComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent,
        ProductItemComponent
    ]
})
export class SharedModule{

}