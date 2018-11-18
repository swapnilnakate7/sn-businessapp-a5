import { Injectable, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feature } from '../sn-models/sn-features.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigureService {
  private theme = 'default';
  private topMenu = [];
  private features: Feature[] = [];
  private CONFIG_URL = environment.CONFIG_URL;
  themeUpdated = new EventEmitter<any>();
  featuresUpdated = new EventEmitter<any>();
  constructor(private http: HttpClient) { }

  setTheme(themeToSet: string) {
    this.theme = themeToSet;
  }

  getTheme() {
    return this.theme;
  }

  setTopMenu(menu: []) {
    this.topMenu = menu;
  }

  getTopMenu() {
    return this.topMenu;
  }

  setFeatures(features: []) {
    features.forEach((feature: any) => {
      this.features.push(new Feature(feature.title, feature.desc, feature.url));
    });
    this.featuresUpdated.emit(this.features);
  }

  getFeatures() {
    return this.features;
  }

  initConfig() {
    this.http.get(this.CONFIG_URL)
      .subscribe((res: any) => {
        console.log('sdf', res);
        this.setTheme(res.theme);
        this.setTopMenu(res.topMenu);
        this.setFeatures(res.features);
        this.themeUpdated.emit(this.getTheme());
      }, err => {
        this.setTheme('primary');
        this.themeUpdated.emit(this.getTheme());
      });

  }
}
