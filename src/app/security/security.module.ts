import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './signup/signup.component'
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports:    [
        FormsModule,
        SharedModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    exports:    [
        LoginComponent,
        SignupComponent
    ]
})
export class SecurityModule{

}