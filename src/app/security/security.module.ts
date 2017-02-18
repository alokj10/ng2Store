import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:    [
        FormsModule,
        SharedModule
    ],
    declarations: [
        LoginComponent
    ],
    exports:    [
        LoginComponent
    ]
})
export class SecurityModule{

}