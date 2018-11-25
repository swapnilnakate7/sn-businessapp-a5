import { Component, OnInit } from '@angular/core';

import { Service } from '../sn-models/sn-service.model';

@Component({
  selector: 'app-sn-services',
  templateUrl: './sn-services.component.html',
  styleUrls: ['./sn-services.component.css']
})
export class SnServicesComponent implements OnInit {
  services: Array<any> = [new Service('Service 1', 'Description 1'), new Service('Service 2', 'Description 2')];
  constructor() { }

  ngOnInit() {
  }

}
