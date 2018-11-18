import { async, ComponentFixture, TestBed } from '@angular/core/testing';


import { SnHeaderComponent } from './sn-header.component';
import { RouterModule } from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SnHeaderComponent', () => {
  let component: SnHeaderComponent;
  let fixture: ComponentFixture<SnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnHeaderComponent],
      imports: [RouterModule.forRoot([])],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }, HttpClient, HttpHandler]
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
