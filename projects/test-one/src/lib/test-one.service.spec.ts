import { TestBed } from '@angular/core/testing';

import { TestOneService } from './test-one.service';

describe('TestOneService', () => {
  let service: TestOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
