import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { MainMenuComponent } from './menu/mainMenu.component';
import { SubmenuComponent } from './menu/submenu.component';
// import { ModalComponent } from '../shared/modal/modal.component';

@NgModule({
    imports:
    [ 
        CommonModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations:
    [
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        MainMenuComponent,
        SubmenuComponent
    ],
    exports:
    [
        HeaderComponent,
        FooterComponent,
        SideBarComponent,
        MainMenuComponent,
        SubmenuComponent,
        FormsModule
    ]
})
export class LayoutModule{

}