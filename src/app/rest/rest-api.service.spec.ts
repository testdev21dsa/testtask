import { TestBed } from '@angular/core/testing';

import { RestApiService } from './rest-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('RestApiService', () => {
  let service: RestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]
    });

    service = TestBed.inject(RestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be Observable', () => {
    expect(service.getImageList(1) instanceof Observable).toBeTruthy();
  });
});
