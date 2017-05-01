import { NgModule, enableProdMode, Provider } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF, Location } from '@angular/common';

import { AppComponent } from './app.component';
// import { AdvisoryComponent } from './temporary/advisory.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './products/product.module';
import { SecurityModule } from './security/security.module';
import { CartModule } from './cart/cart.module';
import { AdminModule } from './admin/admin.module';

import { SiteInfoService } from './services/siteInfo.service';
import { MenuService } from './services/menu.service';
import { AuthenticationService } from './services/authentication.service';
import { ConfigSettings } from './services/configSettings.service';
import { HttpClient } from './services/httpClient.service';
import { PaymentService } from './services/payment.service';


@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    ProductModule,
    SecurityModule,
    AppRoutingModule,
    CartModule,
    AdminModule
  ],
  declarations: [
    AppComponent
    // AdvisoryComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SiteInfoService,
    MenuService,
    AuthenticationService,
    ConfigSettings,
    HttpClient,
    PaymentService,
    // { provide: APP_BASE_HREF, useValue: window['_app_base'] || '/' },
    { provide: Window, useValue: window['_app_base'] }
  ]
})
export class AppModule { }