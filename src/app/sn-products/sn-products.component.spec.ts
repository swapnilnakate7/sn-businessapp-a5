import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnProductsComponent } from './sn-products.component';

describe('SnProductsComponent', () => {
  let component: SnProductsComponent;
  let fixture: ComponentFixture<SnProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
