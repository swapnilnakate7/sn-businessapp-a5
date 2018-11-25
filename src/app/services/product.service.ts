import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../sn-models/sn-product.model';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = [];
  private PRODUCTLIST_ENDPOINT = environment.PRODUCTS_URL;
  productsUpdated = new Subject<any>();
  constructor(private http: HttpClient) { }

  initProductList() {
    this.http.get(this.PRODUCTLIST_ENDPOINT)
      .subscribe((res: any) => {
        console.log('res', res);
        this.setProductList(res);
      }, err => {
        console.log('err', err);
      });
  }

  setProductList(products: []) {
    products.forEach((product: any) => {
      this.productList.push(new Product(product.title, product.price, product.description));
    });
    this.productsUpdated.next(null);
  }

  getProductList() {
    return this.productList;
  }
}
