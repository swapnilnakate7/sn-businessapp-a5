import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnHeaderComponent } from './sn-header.component';

describe('SnHeaderComponent', () => {
  let component: SnHeaderComponent;
  let fixture: ComponentFixture<SnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
