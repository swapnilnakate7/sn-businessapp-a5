import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { SnSliderComponent } from './sn-slider/sn-slider.component';
import { SnHeaderComponent } from './sn-header/sn-header.component';
import { SnFooterComponent } from './sn-footer/sn-footer.component';
//   import * as $  from 'jquery';
@NgModule({
  declarations: [
    AppComponent,
    SnSliderComponent,
    SnHeaderComponent,
    SnFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
