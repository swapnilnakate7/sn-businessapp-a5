import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { SnSliderComponent } from './sn-slider/sn-slider.component';
import { SnHeaderComponent } from './sn-header/sn-header.component';
import { SnFooterComponent } from './sn-footer/sn-footer.component';
import { SnProductsComponent } from './sn-products/sn-products.component';
import { SnServicesComponent } from './sn-services/sn-services.component';
import { SnHomeComponent } from './sn-home/sn-home.component';
import {RouterModule,Routes} from '@angular/router';

//   import * as $  from 'jquery';
const appRoutes:Routes = [
  {
    path: '',
    component: SnHomeComponent
  },
  {
    path: 'home',
    component: SnHomeComponent
  },
  {
      path:'products',
      component:SnProductsComponent
  },
  {
      path:'services',
      component:SnServicesComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    SnSliderComponent,
    SnHeaderComponent,
    SnFooterComponent,
    SnProductsComponent,
    SnServicesComponent,
    SnHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
