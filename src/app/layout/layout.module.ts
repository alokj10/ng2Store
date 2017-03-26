import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { SecurityModule } from '../security/security.module';
import { HttpModule } from '@angular/http';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from '../services/in-memory-data.service';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { MainMenuComponent } from './menu/mainMenu.component';
// import { SubmenuComponent } from './menu/submenu.component';
import { CartComponent } from './cart/cart.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
// import { ModalComponent } from '../shared/modal/modal.component';

import { CartService } from '../services/cart.service';

@NgModule({
    imports:
    [ 
        CommonModule,
        SharedModule,
        AppRoutingModule,
        SecurityModule,
        HttpModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    declarations:
    [
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        MainMenuComponent,
        // SubmenuComponent,
        CartComponent,
        BreadcrumbComponent
    ],
    exports:
    [
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        MainMenuComponent,
        // SubmenuComponent,
        CartComponent,
        FormsModule,
        BreadcrumbComponent
    ],
    providers:
    [
        CartService
    ]
})
export class LayoutModule{

}