import { Component, OnInit } from '@angular/core';
import {SnSliderComponent} from '../sn-slider/sn-slider.component';
import {Feature} from '../sn-models/sn-features.model';

@Component({
  selector: 'app-sn-home',
  templateUrl: './sn-home.component.html',
  styleUrls: ['./sn-home.component.css']
})
export class SnHomeComponent implements OnInit {
  
   
  feature1:Feature=new Feature('myFeature 1','Feature Desc 1','#');
  feature2:Feature=new Feature('myFeature 2','Feature Desc 2','#');
  feature3:Feature=new Feature('myFeature 3','Feature Desc 3','#');
  features:Feature[]=[this.feature1,this.feature2,this.feature3];

  onclickFeature(f){
    console.log(this.features);
  }

  constructor() { }

  ngOnInit() {
  }


}