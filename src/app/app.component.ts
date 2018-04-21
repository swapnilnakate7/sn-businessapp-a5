import { Component } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app';
  menuTop:any=[{title:'Home',state:'home'},{title:'Products',state:'products'},
  {title:'Services',state:'services'},{title:'About',state:'about'}];
  

}
