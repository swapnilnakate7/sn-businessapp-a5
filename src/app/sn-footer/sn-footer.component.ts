import { Component, OnInit, Input } from '@angular/core';
import { ConfigureService } from '../services/configure.service';

@Component({
  selector: 'app-sn-footer',
  templateUrl: './sn-footer.component.html',
  styleUrls: ['./sn-footer.component.css']
})
export class SnFooterComponent implements OnInit {
  @Input() businessName: string;
  theme = '';

  constructor(private configService: ConfigureService) { }

  ngOnInit() {
    this.configService.themeUpdated.subscribe(newTheme => {
      this.theme = newTheme;
    });
  }

}
