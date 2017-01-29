import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from'./carousel/carousel.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        ModalComponent,
        CarouselComponent
    ],
    exports:[
        CommonModule,
        ModalComponent,
        CarouselComponent
    ]
})
export class SharedModule{

}