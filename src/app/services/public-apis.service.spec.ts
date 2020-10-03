import { TestBed } from '@angular/core/testing';

import { PublicAPIsService } from './public-apis.service';

describe('PublicAPIsService', () => {
  let service: PublicAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
