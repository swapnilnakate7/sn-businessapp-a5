import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sn-slider',
  templateUrl: './sn-slider.component.html',
  styleUrls: ['./sn-slider.component.css']
})
export class SnSliderComponent implements OnInit {
  sliderImageUrl = 'assets/images/slider.svg';
  constructor() { }

  ngOnInit() {
  }

}
