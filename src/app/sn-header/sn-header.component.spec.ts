import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { SnHeaderComponent } from './sn-header.component';
import { RouterModule } from '@angular/router';

describe('SnHeaderComponent', () => {
  let component: SnHeaderComponent;
  let fixture: ComponentFixture<SnHeaderComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnHeaderComponent ],
      imports:[RouterModule]
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
