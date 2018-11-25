import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { SnSliderComponent } from './sn-slider/sn-slider.component';
import { SnHeaderComponent } from './sn-header/sn-header.component';
import { SnFooterComponent } from './sn-footer/sn-footer.component';
import { SnProductsComponent } from './sn-products/sn-products.component';
import { SnProductDetailComponent } from './sn-products/sn-product-detail/sn-product-detail.component';
import { SnServicesComponent } from './sn-services/sn-services.component';
import { SnHomeComponent } from './sn-home/sn-home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SnSliderComponent,
    SnHeaderComponent,
    SnFooterComponent,
    SnProductsComponent,
    SnProductDetailComponent,
    SnServicesComponent,
    SnHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class SnBusinessAppModule { }
