import { Component, OnInit } from '@angular/core';
import{Product} from './sn-product.model';
@Component({
  selector: 'app-sn-products',
  templateUrl: './sn-products.component.html',
  styleUrls: ['./sn-products.component.css']
})
export class SnProductsComponent implements OnInit {
  products:Product[]=[new Product('MyProduct 1',20,'Description 1'),
  new Product('MyProduct 2',30,'Description 2'),
  new Product('MyProduct 3',40,'Description 3'),
  new Product('MyProduct 4',50,'Description 4')];


  constructor() { }

  ngOnInit() {
  }

}
