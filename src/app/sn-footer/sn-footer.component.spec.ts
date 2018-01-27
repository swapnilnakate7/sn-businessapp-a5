import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnFooterComponent } from './sn-footer.component';

describe('SnFooterComponent', () => {
  let component: SnFooterComponent;
  let fixture: ComponentFixture<SnFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
