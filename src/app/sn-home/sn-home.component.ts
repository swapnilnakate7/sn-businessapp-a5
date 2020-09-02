import { Component, OnInit, AfterContentInit, OnDestroy, ElementRef } from '@angular/core';
import { SnSliderComponent } from '../sn-slider/sn-slider.component';
import { Feature } from '../sn-models/sn-features.model';
import { ConfigureService } from '../services/configure.service';

@Component({
  selector: 'app-sn-home',
  templateUrl: './sn-home.component.html',
  styleUrls: ['./sn-home.component.css']
})
export class SnHomeComponent implements OnInit, AfterContentInit, OnDestroy {
  so:any;


  /*feature1: Feature = new Feature('myFeature 1', 'Feature Desc 1', '#');
  feature2: Feature = new Feature('myFeature 2', 'Feature Desc 2', '#');
  feature3: Feature = new Feature('myFeature 3', 'Feature Desc 3', '#');*/
  features: Feature[] = [];

  onclickFeature(f) {
    console.log(this.features);
  }

  constructor(private configService: ConfigureService,private el: ElementRef) {
    this.features = this.configService.getFeatures();
   }

  ngOnInit() {
    this.configService.featuresUpdated.subscribe((features) => {
      this.features = features;
    });
  }

  ngAfterContentInit() {
    this.so = ScrollOut({
      scope: this.el.nativeElement
    });
  }

  ngOnDestroy() {
    this.so.teardown();
  }


}
