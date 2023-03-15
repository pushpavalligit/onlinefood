import { TestBed } from '@angular/core/testing';

import { LcaotionService } from './lcaotion.service';

describe('LcaotionService', () => {
  let service: LcaotionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LcaotionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
