import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnServicesComponent } from './sn-services.component';

describe('SnServicesComponent', () => {
  let component: SnServicesComponent;
  let fixture: ComponentFixture<SnServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
