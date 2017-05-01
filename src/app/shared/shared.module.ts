import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';

import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabComponent } from './tabs/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductItemComponent } from '../products/product/product-item.component';
import { ControlButtonComponent } from './control-button/control-button.component';
import { ProductOptionsComponent } from './product-option/product-option.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SubmenuComponent } from './menu/submenu.component';
import { RedirectComponent } from './redirect.component';

import { ReverseSortPipe } from './pipes/reverse-sort.pipe';

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        RouterModule,
        CustomFormsModule
    ],
    declarations:[
        ModalComponent,
        ProductItemComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent,
        ControlButtonComponent,
        ProductOptionsComponent,
        ReverseSortPipe,
        SubmenuComponent,
        SideMenuComponent,
        RedirectComponent
    ],
    exports:[
        CommonModule,
        FormsModule,
        ModalComponent,
        CarouselComponent,
        TabComponent,
        TabsComponent,
        ProductItemComponent,
        ControlButtonComponent,
        ProductOptionsComponent,
        ReverseSortPipe,
        SubmenuComponent,
        SideMenuComponent
    ]
})
export class SharedModule{

}