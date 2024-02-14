import { TestBed } from '@angular/core/testing';
import { HttpProductService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
