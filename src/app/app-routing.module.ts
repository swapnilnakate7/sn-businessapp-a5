import { NgModule } from '@angular/core';
import { RouterModule, Router, Routes } from '@angular/router';
import { SnHomeComponent } from './sn-home/sn-home.component';
import { SnProductsComponent } from './sn-products/sn-products.component';
import { SnServicesComponent } from './sn-services/sn-services.component';
import { SnProductDetailComponent } from './sn-products/sn-product-detail/sn-product-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: SnHomeComponent
    },
    {
        path: 'home',
        component: SnHomeComponent
    },
    {
        path: 'products',
        component: SnProductsComponent
    },
    {
        path: 'product/:id', component: SnProductDetailComponent
    },
    {
        path: 'services',
        component: SnServicesComponent
    },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
