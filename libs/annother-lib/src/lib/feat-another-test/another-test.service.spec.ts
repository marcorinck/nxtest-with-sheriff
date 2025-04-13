import { TestBed } from '@angular/core/testing';

import { AnotherTestService } from './another-test.service';

describe('AnotherTestService', () => {
  let service: AnotherTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotherTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
