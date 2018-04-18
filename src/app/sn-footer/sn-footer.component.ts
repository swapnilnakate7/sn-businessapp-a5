import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sn-footer',
  templateUrl: './sn-footer.component.html',
  styleUrls: ['./sn-footer.component.css']
})
export class SnFooterComponent implements OnInit {
  @Input() businessName:string;

  constructor() { }

  ngOnInit() {
  }

}
