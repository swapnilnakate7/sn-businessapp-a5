import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnSliderComponent } from './sn-slider.component';

describe('SnSliderComponent', () => {
  let component: SnSliderComponent;
  let fixture: ComponentFixture<SnSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
