import { Component, OnInit, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConfigureService } from '../services/configure.service';


@Component({
  selector: 'app-sn-header',
  templateUrl: './sn-header.component.html',
  styleUrls: ['./sn-header.component.scss']
})
export class SnHeaderComponent implements OnInit {
  @Input() businessName: string;
  @Input() menus: any;
   theme = '';

  constructor(private configService: ConfigureService) { }

  ngOnInit() {
    this.configService.themeUpdated.subscribe(newTheme => {
      console.log('new', newTheme);
      this.theme = newTheme;
    });
  }
  updateTheme() {
    this.theme = this.configService.getTheme();
  }

}
