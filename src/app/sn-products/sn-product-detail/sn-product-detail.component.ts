import { Component, OnInit } from '@angular/core';
import { Product } from '../../sn-models/sn-product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
    templateUrl: './sn-product-detail.component.html'
})
export class SnProductDetailComponent implements OnInit {
    product: Product;
    constructor(private route: ActivatedRoute, private prodService: ProductService) { }

    ngOnInit() {

        console.log(this.route.snapshot.params['id']);
        this.product = this.prodService.getProductList()[+this.route.snapshot.params['id']];
        this.route.params.subscribe(data => {

            console.log('loaded', data);
            this.exec(+data.id);
        
        });
    }

    exec(data) {
        this.prodService.productsUpdated.subscribe(
            res => {
              this.product = this.prodService.getProductList()[data];
              console.log('loaded', this.product);
            }
          );
    }
}
