import { TestBed, inject } from '@angular/core/testing';

import { ReadarsService } from './readars.service';

describe('ReadarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadarsService]
    });
  });

  it('should be created', inject([ReadarsService], (service: ReadarsService) => {
    expect(service).toBeTruthy();
  }));
});
