import { Component, OnInit,Input } from '@angular/core';
import { RouterLink} from '@angular/router';

@Component({
  selector: 'app-sn-header',
  templateUrl: './sn-header.component.html',
  styleUrls: ['./sn-header.component.css']
})
export class SnHeaderComponent implements OnInit {
   @Input()businessName:string;
   @Input()menus:any;
   
  constructor() { }

  ngOnInit() {
  }  

}
