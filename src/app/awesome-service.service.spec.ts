import { TestBed } from '@angular/core/testing';

import { AwesomeServiceService } from './awesome-service.service';

describe('AwesomeServiceService', () => {
  let service: AwesomeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwesomeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
