import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfigureService } from './services/configure.service';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SnBiz';
  theme = '';
  menuTop: any = [];
  constructor(private configService: ConfigureService, private productService: ProductService, private http: HttpClient) { }
  ngOnInit() {
    this.configService.initConfig();
    this.productService.initProductList();
    this.configService.themeUpdated.subscribe(newTheme => {
      this.theme = newTheme;
      this.menuTop = this.configService.getTopMenu();
    });
  }

}
