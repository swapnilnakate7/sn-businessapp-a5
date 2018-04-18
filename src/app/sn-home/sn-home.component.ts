import { Component, OnInit } from '@angular/core';
import {SnSliderComponent} from '../sn-slider/sn-slider.component';
import {Feature} from './feature-model';

@Component({
  selector: 'app-sn-home',
  templateUrl: './sn-home.component.html',
  styleUrls: ['./sn-home.component.css']
})
export class SnHomeComponent implements OnInit {
  
   
  feature1:Feature=new Feature('myFeature 1','Feature Desc 1', 'Feature URL');
  feature2:Feature=new Feature('myFeature 2','Feature Desc 2', 'Feature URL');
  feature3:Feature=new Feature('myFeature 3','Feature Desc 3', 'Feature URL');
  features:any=[this.feature1,this.feature2,this.feature3];

  constructor() { }

  ngOnInit() {
  }


}
