import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SnSliderComponent } from '../sn-slider/sn-slider.component';
import { SnHomeComponent } from './sn-home.component';
import { HttpClient, HttpHandler } from '@angular/common/http';


describe('SnHomeComponent', () => {
  let component: SnHomeComponent;
  let fixture: ComponentFixture<SnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnHomeComponent, SnSliderComponent],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
