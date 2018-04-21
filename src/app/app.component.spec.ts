import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SnHeaderComponent} from './sn-header/sn-header.component';
import { SnFooterComponent } from './sn-footer/sn-footer.component';
import {RouterModule,Routes} from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

const appRoutes:Routes = [
 {path:'',component:AppComponent}
];
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SnHeaderComponent,
        SnFooterComponent
      ],
      imports:[RouterModule.forRoot(appRoutes)],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    
    expect(app).toBeTruthy();
  }));
  it('should have as title app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});
