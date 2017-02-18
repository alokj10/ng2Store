import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        ModalComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent
    ],
    exports:[
        CommonModule,
        ModalComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent
    ]
})
export class SharedModule{

}