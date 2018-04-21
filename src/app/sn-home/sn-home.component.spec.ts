import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {SnSliderComponent} from '../sn-slider/sn-slider.component';
import { SnHomeComponent } from './sn-home.component';

describe('SnHomeComponent', () => {
  let component: SnHomeComponent;
  let fixture: ComponentFixture<SnHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnHomeComponent ,SnSliderComponent]
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
