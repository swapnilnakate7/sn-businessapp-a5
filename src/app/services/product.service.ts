import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../sn-products/sn-product.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productList: Product[] = [];
  private PRODUCTLIST_ENDPOINT = environment.PRODUCTS_URL;
  productsUpdated = new EventEmitter<any>();
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
    this.productsUpdated.emit(null);
  }

  getProductList() {
    return this.productList;
  }
}
