import { TestBed, inject } from '@angular/core/testing';

import { ReservedService } from './reserved.service';

describe('ReservedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservedService]
    });
  });

  it('should be created', inject([ReservedService], (service: ReservedService) => {
    expect(service).toBeTruthy();
  }));
});
