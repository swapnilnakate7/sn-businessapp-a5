import { Component, OnInit } from '@angular/core';
import { Product } from '../sn-models/sn-product.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sn-products',
  templateUrl: './sn-products.component.html',
  styleUrls: ['./sn-products.component.css']
})
export class SnProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productsService: ProductService, private router: Router) {
    this.products = this.productsService.getProductList();
  }

  ngOnInit() {
    this.productsService.productsUpdated.subscribe(
      res => {
        this.products = this.productsService.getProductList();
      }
    );
  }

  buy(p, i) {
    this.router.navigate(['product/' + i]);
  }

}
