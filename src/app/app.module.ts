import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { AdvisoryComponent } from './temporary/advisory.component';

import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './products/product.module';

import { SiteInfoService } from './services/siteInfo.service';
import { MenuService } from './services/menu.service';

@NgModule({
  imports: [
    BrowserModule,
    LayoutModule,
    SharedModule,
    ProductModule
  ],
  declarations: [
    AppComponent
    // AdvisoryComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [
    SiteInfoService,
    MenuService
  ]
})
export class AppModule { }