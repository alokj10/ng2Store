import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { AdvisoryComponent } from './temporary/advisory.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './products/product.module';
import { SecurityModule } from './security/security.module';

import { SiteInfoService } from './services/siteInfo.service';
import { MenuService } from './services/menu.service';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    ProductModule,
    SecurityModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent
    // AdvisoryComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SiteInfoService,
    MenuService,
    AuthenticationService
  ]
})
export class AppModule { }