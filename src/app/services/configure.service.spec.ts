import { TestBed } from '@angular/core/testing';

import { ConfigureService } from './configure.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ConfigureService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient, HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: ConfigureService = TestBed.get(ConfigureService);
    expect(service).toBeTruthy();
  });
});
