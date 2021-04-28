import { TestBed } from '@angular/core/testing';

import { CatesService } from './cates.service';

describe('CatesService', () => {
  let service: CatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
